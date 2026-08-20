# `dataAwsElasticacheServiceUpdateActions` Submodule <a name="`dataAwsElasticacheServiceUpdateActions` Submodule" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticacheServiceUpdateActions <a name="DataAwsElasticacheServiceUpdateActions" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions aws_elasticache_service_update_actions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_elasticache_service_update_actions.DataAwsElasticacheServiceUpdateActions;

DataAwsElasticacheServiceUpdateActions.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .cacheClusterId(java.lang.String)
//  .region(java.lang.String)
//  .replicationGroupId(java.lang.String)
//  .serviceUpdateStatus(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.cacheClusterId">cacheClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#cache_cluster_id DataAwsElasticacheServiceUpdateActions#cache_cluster_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.replicationGroupId">replicationGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#replication_group_id DataAwsElasticacheServiceUpdateActions#replication_group_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.serviceUpdateStatus">serviceUpdateStatus</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#service_update_status DataAwsElasticacheServiceUpdateActions#service_update_status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cacheClusterId`<sup>Optional</sup> <a name="cacheClusterId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.cacheClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#cache_cluster_id DataAwsElasticacheServiceUpdateActions#cache_cluster_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#region DataAwsElasticacheServiceUpdateActions#region}

---

##### `replicationGroupId`<sup>Optional</sup> <a name="replicationGroupId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.replicationGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#replication_group_id DataAwsElasticacheServiceUpdateActions#replication_group_id}.

---

##### `serviceUpdateStatus`<sup>Optional</sup> <a name="serviceUpdateStatus" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.serviceUpdateStatus"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#service_update_status DataAwsElasticacheServiceUpdateActions#service_update_status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetCacheClusterId">resetCacheClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetReplicationGroupId">resetReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetServiceUpdateStatus">resetServiceUpdateStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCacheClusterId` <a name="resetCacheClusterId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetCacheClusterId"></a>

```java
public void resetCacheClusterId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetReplicationGroupId` <a name="resetReplicationGroupId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetReplicationGroupId"></a>

```java
public void resetReplicationGroupId()
```

##### `resetServiceUpdateStatus` <a name="resetServiceUpdateStatus" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetServiceUpdateStatus"></a>

```java
public void resetServiceUpdateStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsElasticacheServiceUpdateActions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_elasticache_service_update_actions.DataAwsElasticacheServiceUpdateActions;

DataAwsElasticacheServiceUpdateActions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_elasticache_service_update_actions.DataAwsElasticacheServiceUpdateActions;

DataAwsElasticacheServiceUpdateActions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_elasticache_service_update_actions.DataAwsElasticacheServiceUpdateActions;

DataAwsElasticacheServiceUpdateActions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_elasticache_service_update_actions.DataAwsElasticacheServiceUpdateActions;

DataAwsElasticacheServiceUpdateActions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsElasticacheServiceUpdateActions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsElasticacheServiceUpdateActions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsElasticacheServiceUpdateActions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsElasticacheServiceUpdateActions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsElasticacheServiceUpdateActions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.updateActions">updateActions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList">DataAwsElasticacheServiceUpdateActionsUpdateActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.cacheClusterIdInput">cacheClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.replicationGroupIdInput">replicationGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.serviceUpdateStatusInput">serviceUpdateStatusInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.cacheClusterId">cacheClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.replicationGroupId">replicationGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.serviceUpdateStatus">serviceUpdateStatus</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `updateActions`<sup>Required</sup> <a name="updateActions" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.updateActions"></a>

```java
public DataAwsElasticacheServiceUpdateActionsUpdateActionsList getUpdateActions();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList">DataAwsElasticacheServiceUpdateActionsUpdateActionsList</a>

---

##### `cacheClusterIdInput`<sup>Optional</sup> <a name="cacheClusterIdInput" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.cacheClusterIdInput"></a>

```java
public java.lang.String getCacheClusterIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `replicationGroupIdInput`<sup>Optional</sup> <a name="replicationGroupIdInput" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.replicationGroupIdInput"></a>

```java
public java.lang.String getReplicationGroupIdInput();
```

- *Type:* java.lang.String

---

##### `serviceUpdateStatusInput`<sup>Optional</sup> <a name="serviceUpdateStatusInput" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.serviceUpdateStatusInput"></a>

```java
public java.util.List<java.lang.String> getServiceUpdateStatusInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cacheClusterId`<sup>Required</sup> <a name="cacheClusterId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.cacheClusterId"></a>

```java
public java.lang.String getCacheClusterId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `replicationGroupId`<sup>Required</sup> <a name="replicationGroupId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.replicationGroupId"></a>

```java
public java.lang.String getReplicationGroupId();
```

- *Type:* java.lang.String

---

##### `serviceUpdateStatus`<sup>Required</sup> <a name="serviceUpdateStatus" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.serviceUpdateStatus"></a>

```java
public java.util.List<java.lang.String> getServiceUpdateStatus();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticacheServiceUpdateActionsConfig <a name="DataAwsElasticacheServiceUpdateActionsConfig" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_elasticache_service_update_actions.DataAwsElasticacheServiceUpdateActionsConfig;

DataAwsElasticacheServiceUpdateActionsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .cacheClusterId(java.lang.String)
//  .region(java.lang.String)
//  .replicationGroupId(java.lang.String)
//  .serviceUpdateStatus(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.cacheClusterId">cacheClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#cache_cluster_id DataAwsElasticacheServiceUpdateActions#cache_cluster_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.replicationGroupId">replicationGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#replication_group_id DataAwsElasticacheServiceUpdateActions#replication_group_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.serviceUpdateStatus">serviceUpdateStatus</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#service_update_status DataAwsElasticacheServiceUpdateActions#service_update_status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cacheClusterId`<sup>Optional</sup> <a name="cacheClusterId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.cacheClusterId"></a>

```java
public java.lang.String getCacheClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#cache_cluster_id DataAwsElasticacheServiceUpdateActions#cache_cluster_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#region DataAwsElasticacheServiceUpdateActions#region}

---

##### `replicationGroupId`<sup>Optional</sup> <a name="replicationGroupId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.replicationGroupId"></a>

```java
public java.lang.String getReplicationGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#replication_group_id DataAwsElasticacheServiceUpdateActions#replication_group_id}.

---

##### `serviceUpdateStatus`<sup>Optional</sup> <a name="serviceUpdateStatus" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.serviceUpdateStatus"></a>

```java
public java.util.List<java.lang.String> getServiceUpdateStatus();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#service_update_status DataAwsElasticacheServiceUpdateActions#service_update_status}.

---

### DataAwsElasticacheServiceUpdateActionsUpdateActions <a name="DataAwsElasticacheServiceUpdateActionsUpdateActions" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActions.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_elasticache_service_update_actions.DataAwsElasticacheServiceUpdateActionsUpdateActions;

DataAwsElasticacheServiceUpdateActionsUpdateActions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsElasticacheServiceUpdateActionsUpdateActionsList <a name="DataAwsElasticacheServiceUpdateActionsUpdateActionsList" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_elasticache_service_update_actions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList;

new DataAwsElasticacheServiceUpdateActionsUpdateActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.get"></a>

```java
public DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference <a name="DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_elasticache_service_update_actions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference;

new DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.cacheClusterId">cacheClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.estimatedUpdateTime">estimatedUpdateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.recommendedApplyByDate">recommendedApplyByDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.releaseDate">releaseDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.replicationGroupId">replicationGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateName">serviceUpdateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateSeverity">serviceUpdateSeverity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateStatus">serviceUpdateStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateType">serviceUpdateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.updateActionStatus">updateActionStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActions">DataAwsElasticacheServiceUpdateActionsUpdateActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheClusterId`<sup>Required</sup> <a name="cacheClusterId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.cacheClusterId"></a>

```java
public java.lang.String getCacheClusterId();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `estimatedUpdateTime`<sup>Required</sup> <a name="estimatedUpdateTime" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.estimatedUpdateTime"></a>

```java
public java.lang.String getEstimatedUpdateTime();
```

- *Type:* java.lang.String

---

##### `recommendedApplyByDate`<sup>Required</sup> <a name="recommendedApplyByDate" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.recommendedApplyByDate"></a>

```java
public java.lang.String getRecommendedApplyByDate();
```

- *Type:* java.lang.String

---

##### `releaseDate`<sup>Required</sup> <a name="releaseDate" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.releaseDate"></a>

```java
public java.lang.String getReleaseDate();
```

- *Type:* java.lang.String

---

##### `replicationGroupId`<sup>Required</sup> <a name="replicationGroupId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.replicationGroupId"></a>

```java
public java.lang.String getReplicationGroupId();
```

- *Type:* java.lang.String

---

##### `serviceUpdateName`<sup>Required</sup> <a name="serviceUpdateName" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateName"></a>

```java
public java.lang.String getServiceUpdateName();
```

- *Type:* java.lang.String

---

##### `serviceUpdateSeverity`<sup>Required</sup> <a name="serviceUpdateSeverity" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateSeverity"></a>

```java
public java.lang.String getServiceUpdateSeverity();
```

- *Type:* java.lang.String

---

##### `serviceUpdateStatus`<sup>Required</sup> <a name="serviceUpdateStatus" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateStatus"></a>

```java
public java.lang.String getServiceUpdateStatus();
```

- *Type:* java.lang.String

---

##### `serviceUpdateType`<sup>Required</sup> <a name="serviceUpdateType" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateType"></a>

```java
public java.lang.String getServiceUpdateType();
```

- *Type:* java.lang.String

---

##### `updateActionStatus`<sup>Required</sup> <a name="updateActionStatus" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.updateActionStatus"></a>

```java
public java.lang.String getUpdateActionStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.internalValue"></a>

```java
public DataAwsElasticacheServiceUpdateActionsUpdateActions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActions">DataAwsElasticacheServiceUpdateActionsUpdateActions</a>

---



