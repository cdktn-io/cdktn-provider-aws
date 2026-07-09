# `elasticacheServerlessCache` Submodule <a name="`elasticacheServerlessCache` Submodule" id="@cdktn/provider-aws.elasticacheServerlessCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheServerlessCache <a name="ElasticacheServerlessCache" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache aws_elasticache_serverless_cache}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCache;

ElasticacheServerlessCache.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .engine(java.lang.String)
    .name(java.lang.String)
//  .cacheUsageLimits(IResolvable|java.util.List<ElasticacheServerlessCacheCacheUsageLimits>)
//  .dailySnapshotTime(java.lang.String)
//  .description(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .majorEngineVersion(java.lang.String)
//  .networkType(java.lang.String)
//  .region(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .snapshotArnsToRestore(java.util.List<java.lang.String>)
//  .snapshotRetentionLimit(java.lang.Number)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ElasticacheServerlessCacheTimeouts)
//  .userGroupId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#engine ElasticacheServerlessCache#engine}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#name ElasticacheServerlessCache#name}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.cacheUsageLimits">cacheUsageLimits</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>></code> | cache_usage_limits block. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.dailySnapshotTime">dailySnapshotTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#daily_snapshot_time ElasticacheServerlessCache#daily_snapshot_time}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#description ElasticacheServerlessCache#description}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#kms_key_id ElasticacheServerlessCache#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.majorEngineVersion">majorEngineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#major_engine_version ElasticacheServerlessCache#major_engine_version}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.networkType">networkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#network_type ElasticacheServerlessCache#network_type}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#security_group_ids ElasticacheServerlessCache#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.snapshotArnsToRestore">snapshotArnsToRestore</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#snapshot_arns_to_restore ElasticacheServerlessCache#snapshot_arns_to_restore}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#snapshot_retention_limit ElasticacheServerlessCache#snapshot_retention_limit}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#subnet_ids ElasticacheServerlessCache#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#tags ElasticacheServerlessCache#tags}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.userGroupId">userGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#user_group_id ElasticacheServerlessCache#user_group_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.engine"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#engine ElasticacheServerlessCache#engine}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#name ElasticacheServerlessCache#name}.

---

##### `cacheUsageLimits`<sup>Optional</sup> <a name="cacheUsageLimits" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.cacheUsageLimits"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>>

cache_usage_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#cache_usage_limits ElasticacheServerlessCache#cache_usage_limits}

---

##### `dailySnapshotTime`<sup>Optional</sup> <a name="dailySnapshotTime" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.dailySnapshotTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#daily_snapshot_time ElasticacheServerlessCache#daily_snapshot_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#description ElasticacheServerlessCache#description}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#kms_key_id ElasticacheServerlessCache#kms_key_id}.

---

##### `majorEngineVersion`<sup>Optional</sup> <a name="majorEngineVersion" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.majorEngineVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#major_engine_version ElasticacheServerlessCache#major_engine_version}.

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.networkType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#network_type ElasticacheServerlessCache#network_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#region ElasticacheServerlessCache#region}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#security_group_ids ElasticacheServerlessCache#security_group_ids}.

---

##### `snapshotArnsToRestore`<sup>Optional</sup> <a name="snapshotArnsToRestore" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.snapshotArnsToRestore"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#snapshot_arns_to_restore ElasticacheServerlessCache#snapshot_arns_to_restore}.

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="snapshotRetentionLimit" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.snapshotRetentionLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#snapshot_retention_limit ElasticacheServerlessCache#snapshot_retention_limit}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#subnet_ids ElasticacheServerlessCache#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#tags ElasticacheServerlessCache#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#timeouts ElasticacheServerlessCache#timeouts}

---

##### `userGroupId`<sup>Optional</sup> <a name="userGroupId" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.userGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#user_group_id ElasticacheServerlessCache#user_group_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putCacheUsageLimits">putCacheUsageLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetCacheUsageLimits">resetCacheUsageLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetDailySnapshotTime">resetDailySnapshotTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetMajorEngineVersion">resetMajorEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotArnsToRestore">resetSnapshotArnsToRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotRetentionLimit">resetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetUserGroupId">resetUserGroupId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCacheUsageLimits` <a name="putCacheUsageLimits" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putCacheUsageLimits"></a>

```java
public void putCacheUsageLimits(IResolvable|java.util.List<ElasticacheServerlessCacheCacheUsageLimits> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putCacheUsageLimits.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putTimeouts"></a>

```java
public void putTimeouts(ElasticacheServerlessCacheTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a>

---

##### `resetCacheUsageLimits` <a name="resetCacheUsageLimits" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetCacheUsageLimits"></a>

```java
public void resetCacheUsageLimits()
```

##### `resetDailySnapshotTime` <a name="resetDailySnapshotTime" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetDailySnapshotTime"></a>

```java
public void resetDailySnapshotTime()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetMajorEngineVersion` <a name="resetMajorEngineVersion" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetMajorEngineVersion"></a>

```java
public void resetMajorEngineVersion()
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetNetworkType"></a>

```java
public void resetNetworkType()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSnapshotArnsToRestore` <a name="resetSnapshotArnsToRestore" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotArnsToRestore"></a>

```java
public void resetSnapshotArnsToRestore()
```

##### `resetSnapshotRetentionLimit` <a name="resetSnapshotRetentionLimit" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotRetentionLimit"></a>

```java
public void resetSnapshotRetentionLimit()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserGroupId` <a name="resetUserGroupId" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.resetUserGroupId"></a>

```java
public void resetUserGroupId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticacheServerlessCache resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isConstruct"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCache;

ElasticacheServerlessCache.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCache;

ElasticacheServerlessCache.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCache;

ElasticacheServerlessCache.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCache;

ElasticacheServerlessCache.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ElasticacheServerlessCache.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ElasticacheServerlessCache resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ElasticacheServerlessCache to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ElasticacheServerlessCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheServerlessCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimits">cacheUsageLimits</a></code> | <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList">ElasticacheServerlessCacheCacheUsageLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList">ElasticacheServerlessCacheEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.fullEngineVersion">fullEngineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.readerEndpoint">readerEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList">ElasticacheServerlessCacheReaderEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference">ElasticacheServerlessCacheTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimitsInput">cacheUsageLimitsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTimeInput">dailySnapshotTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.engineInput">engineInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersionInput">majorEngineVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestoreInput">snapshotArnsToRestoreInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimitInput">snapshotRetentionLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupIdInput">userGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTime">dailySnapshotTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersion">majorEngineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestore">snapshotArnsToRestore</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupId">userGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cacheUsageLimits`<sup>Required</sup> <a name="cacheUsageLimits" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimits"></a>

```java
public ElasticacheServerlessCacheCacheUsageLimitsList getCacheUsageLimits();
```

- *Type:* <a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList">ElasticacheServerlessCacheCacheUsageLimitsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.endpoint"></a>

```java
public ElasticacheServerlessCacheEndpointList getEndpoint();
```

- *Type:* <a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList">ElasticacheServerlessCacheEndpointList</a>

---

##### `fullEngineVersion`<sup>Required</sup> <a name="fullEngineVersion" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.fullEngineVersion"></a>

```java
public java.lang.String getFullEngineVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `readerEndpoint`<sup>Required</sup> <a name="readerEndpoint" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.readerEndpoint"></a>

```java
public ElasticacheServerlessCacheReaderEndpointList getReaderEndpoint();
```

- *Type:* <a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList">ElasticacheServerlessCacheReaderEndpointList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.timeouts"></a>

```java
public ElasticacheServerlessCacheTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference">ElasticacheServerlessCacheTimeoutsOutputReference</a>

---

##### `cacheUsageLimitsInput`<sup>Optional</sup> <a name="cacheUsageLimitsInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimitsInput"></a>

```java
public IResolvable|java.util.List<ElasticacheServerlessCacheCacheUsageLimits> getCacheUsageLimitsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>>

---

##### `dailySnapshotTimeInput`<sup>Optional</sup> <a name="dailySnapshotTimeInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTimeInput"></a>

```java
public java.lang.String getDailySnapshotTimeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `engineInput`<sup>Optional</sup> <a name="engineInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.engineInput"></a>

```java
public java.lang.String getEngineInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `majorEngineVersionInput`<sup>Optional</sup> <a name="majorEngineVersionInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersionInput"></a>

```java
public java.lang.String getMajorEngineVersionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotArnsToRestoreInput`<sup>Optional</sup> <a name="snapshotArnsToRestoreInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestoreInput"></a>

```java
public java.util.List<java.lang.String> getSnapshotArnsToRestoreInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotRetentionLimitInput`<sup>Optional</sup> <a name="snapshotRetentionLimitInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimitInput"></a>

```java
public java.lang.Number getSnapshotRetentionLimitInput();
```

- *Type:* java.lang.Number

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.timeoutsInput"></a>

```java
public IResolvable|ElasticacheServerlessCacheTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a>

---

##### `userGroupIdInput`<sup>Optional</sup> <a name="userGroupIdInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupIdInput"></a>

```java
public java.lang.String getUserGroupIdInput();
```

- *Type:* java.lang.String

---

##### `dailySnapshotTime`<sup>Required</sup> <a name="dailySnapshotTime" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTime"></a>

```java
public java.lang.String getDailySnapshotTime();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `majorEngineVersion`<sup>Required</sup> <a name="majorEngineVersion" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersion"></a>

```java
public java.lang.String getMajorEngineVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotArnsToRestore`<sup>Required</sup> <a name="snapshotArnsToRestore" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestore"></a>

```java
public java.util.List<java.lang.String> getSnapshotArnsToRestore();
```

- *Type:* java.util.List<java.lang.String>

---

##### `snapshotRetentionLimit`<sup>Required</sup> <a name="snapshotRetentionLimit" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimit"></a>

```java
public java.lang.Number getSnapshotRetentionLimit();
```

- *Type:* java.lang.Number

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userGroupId`<sup>Required</sup> <a name="userGroupId" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupId"></a>

```java
public java.lang.String getUserGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCache.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheServerlessCacheCacheUsageLimits <a name="ElasticacheServerlessCacheCacheUsageLimits" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCacheCacheUsageLimits;

ElasticacheServerlessCacheCacheUsageLimits.builder()
//  .dataStorage(IResolvable|java.util.List<ElasticacheServerlessCacheCacheUsageLimitsDataStorage>)
//  .ecpuPerSecond(IResolvable|java.util.List<ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.dataStorage">dataStorage</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>></code> | data_storage block. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.ecpuPerSecond">ecpuPerSecond</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>></code> | ecpu_per_second block. |

---

##### `dataStorage`<sup>Optional</sup> <a name="dataStorage" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.dataStorage"></a>

```java
public IResolvable|java.util.List<ElasticacheServerlessCacheCacheUsageLimitsDataStorage> getDataStorage();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>>

data_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#data_storage ElasticacheServerlessCache#data_storage}

---

##### `ecpuPerSecond`<sup>Optional</sup> <a name="ecpuPerSecond" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.ecpuPerSecond"></a>

```java
public IResolvable|java.util.List<ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond> getEcpuPerSecond();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>>

ecpu_per_second block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#ecpu_per_second ElasticacheServerlessCache#ecpu_per_second}

---

### ElasticacheServerlessCacheCacheUsageLimitsDataStorage <a name="ElasticacheServerlessCacheCacheUsageLimitsDataStorage" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage;

ElasticacheServerlessCacheCacheUsageLimitsDataStorage.builder()
    .unit(java.lang.String)
//  .maximum(java.lang.Number)
//  .minimum(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.unit">unit</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#unit ElasticacheServerlessCache#unit}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.maximum">maximum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.minimum">minimum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#minimum ElasticacheServerlessCache#minimum}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#unit ElasticacheServerlessCache#unit}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.maximum"></a>

```java
public java.lang.Number getMaximum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.minimum"></a>

```java
public java.lang.Number getMinimum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#minimum ElasticacheServerlessCache#minimum}.

---

### ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond <a name="ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond;

ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.builder()
//  .maximum(java.lang.Number)
//  .minimum(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.property.maximum">maximum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.property.minimum">minimum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#minimum ElasticacheServerlessCache#minimum}. |

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.property.maximum"></a>

```java
public java.lang.Number getMaximum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.property.minimum"></a>

```java
public java.lang.Number getMinimum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#minimum ElasticacheServerlessCache#minimum}.

---

### ElasticacheServerlessCacheConfig <a name="ElasticacheServerlessCacheConfig" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCacheConfig;

ElasticacheServerlessCacheConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .engine(java.lang.String)
    .name(java.lang.String)
//  .cacheUsageLimits(IResolvable|java.util.List<ElasticacheServerlessCacheCacheUsageLimits>)
//  .dailySnapshotTime(java.lang.String)
//  .description(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .majorEngineVersion(java.lang.String)
//  .networkType(java.lang.String)
//  .region(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .snapshotArnsToRestore(java.util.List<java.lang.String>)
//  .snapshotRetentionLimit(java.lang.Number)
//  .subnetIds(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(ElasticacheServerlessCacheTimeouts)
//  .userGroupId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.engine">engine</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#engine ElasticacheServerlessCache#engine}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#name ElasticacheServerlessCache#name}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.cacheUsageLimits">cacheUsageLimits</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>></code> | cache_usage_limits block. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dailySnapshotTime">dailySnapshotTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#daily_snapshot_time ElasticacheServerlessCache#daily_snapshot_time}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#description ElasticacheServerlessCache#description}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#kms_key_id ElasticacheServerlessCache#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.majorEngineVersion">majorEngineVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#major_engine_version ElasticacheServerlessCache#major_engine_version}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.networkType">networkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#network_type ElasticacheServerlessCache#network_type}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#security_group_ids ElasticacheServerlessCache#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotArnsToRestore">snapshotArnsToRestore</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#snapshot_arns_to_restore ElasticacheServerlessCache#snapshot_arns_to_restore}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotRetentionLimit">snapshotRetentionLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#snapshot_retention_limit ElasticacheServerlessCache#snapshot_retention_limit}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#subnet_ids ElasticacheServerlessCache#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#tags ElasticacheServerlessCache#tags}. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.userGroupId">userGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#user_group_id ElasticacheServerlessCache#user_group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#engine ElasticacheServerlessCache#engine}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#name ElasticacheServerlessCache#name}.

---

##### `cacheUsageLimits`<sup>Optional</sup> <a name="cacheUsageLimits" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.cacheUsageLimits"></a>

```java
public IResolvable|java.util.List<ElasticacheServerlessCacheCacheUsageLimits> getCacheUsageLimits();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>>

cache_usage_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#cache_usage_limits ElasticacheServerlessCache#cache_usage_limits}

---

##### `dailySnapshotTime`<sup>Optional</sup> <a name="dailySnapshotTime" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dailySnapshotTime"></a>

```java
public java.lang.String getDailySnapshotTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#daily_snapshot_time ElasticacheServerlessCache#daily_snapshot_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#description ElasticacheServerlessCache#description}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#kms_key_id ElasticacheServerlessCache#kms_key_id}.

---

##### `majorEngineVersion`<sup>Optional</sup> <a name="majorEngineVersion" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.majorEngineVersion"></a>

```java
public java.lang.String getMajorEngineVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#major_engine_version ElasticacheServerlessCache#major_engine_version}.

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#network_type ElasticacheServerlessCache#network_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#region ElasticacheServerlessCache#region}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#security_group_ids ElasticacheServerlessCache#security_group_ids}.

---

##### `snapshotArnsToRestore`<sup>Optional</sup> <a name="snapshotArnsToRestore" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotArnsToRestore"></a>

```java
public java.util.List<java.lang.String> getSnapshotArnsToRestore();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#snapshot_arns_to_restore ElasticacheServerlessCache#snapshot_arns_to_restore}.

---

##### `snapshotRetentionLimit`<sup>Optional</sup> <a name="snapshotRetentionLimit" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotRetentionLimit"></a>

```java
public java.lang.Number getSnapshotRetentionLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#snapshot_retention_limit ElasticacheServerlessCache#snapshot_retention_limit}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#subnet_ids ElasticacheServerlessCache#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#tags ElasticacheServerlessCache#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.timeouts"></a>

```java
public ElasticacheServerlessCacheTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#timeouts ElasticacheServerlessCache#timeouts}

---

##### `userGroupId`<sup>Optional</sup> <a name="userGroupId" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.userGroupId"></a>

```java
public java.lang.String getUserGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#user_group_id ElasticacheServerlessCache#user_group_id}.

---

### ElasticacheServerlessCacheEndpoint <a name="ElasticacheServerlessCacheEndpoint" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCacheEndpoint;

ElasticacheServerlessCacheEndpoint.builder()
    .build();
```


### ElasticacheServerlessCacheReaderEndpoint <a name="ElasticacheServerlessCacheReaderEndpoint" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCacheReaderEndpoint;

ElasticacheServerlessCacheReaderEndpoint.builder()
    .build();
```


### ElasticacheServerlessCacheTimeouts <a name="ElasticacheServerlessCacheTimeouts" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCacheTimeouts;

ElasticacheServerlessCacheTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#create ElasticacheServerlessCache#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#delete ElasticacheServerlessCache#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/elasticache_serverless_cache#update ElasticacheServerlessCache#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheServerlessCacheCacheUsageLimitsDataStorageList <a name="ElasticacheServerlessCacheCacheUsageLimitsDataStorageList" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList;

new ElasticacheServerlessCacheCacheUsageLimitsDataStorageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.get"></a>

```java
public ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticacheServerlessCacheCacheUsageLimitsDataStorage> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>>

---


### ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference <a name="ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference;

new ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximum` <a name="resetMaximum" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resetMaximum"></a>

```java
public void resetMaximum()
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resetMinimum"></a>

```java
public void resetMinimum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximumInput">maximumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.minimumInput">minimumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximum">maximum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.minimum">minimum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximumInput"></a>

```java
public java.lang.Number getMaximumInput();
```

- *Type:* java.lang.Number

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.minimumInput"></a>

```java
public java.lang.Number getMinimumInput();
```

- *Type:* java.lang.Number

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximum"></a>

```java
public java.lang.Number getMaximum();
```

- *Type:* java.lang.Number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.minimum"></a>

```java
public java.lang.Number getMinimum();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticacheServerlessCacheCacheUsageLimitsDataStorage getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>

---


### ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList <a name="ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList;

new ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.get"></a>

```java
public ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>>

---


### ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference <a name="ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference;

new ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximum` <a name="resetMaximum" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resetMaximum"></a>

```java
public void resetMaximum()
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resetMinimum"></a>

```java
public void resetMinimum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximumInput">maximumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.minimumInput">minimumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximum">maximum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.minimum">minimum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximumInput"></a>

```java
public java.lang.Number getMaximumInput();
```

- *Type:* java.lang.Number

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.minimumInput"></a>

```java
public java.lang.Number getMinimumInput();
```

- *Type:* java.lang.Number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximum"></a>

```java
public java.lang.Number getMaximum();
```

- *Type:* java.lang.Number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.minimum"></a>

```java
public java.lang.Number getMinimum();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>

---


### ElasticacheServerlessCacheCacheUsageLimitsList <a name="ElasticacheServerlessCacheCacheUsageLimitsList" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCacheCacheUsageLimitsList;

new ElasticacheServerlessCacheCacheUsageLimitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.get"></a>

```java
public ElasticacheServerlessCacheCacheUsageLimitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElasticacheServerlessCacheCacheUsageLimits> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>>

---


### ElasticacheServerlessCacheCacheUsageLimitsOutputReference <a name="ElasticacheServerlessCacheCacheUsageLimitsOutputReference" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference;

new ElasticacheServerlessCacheCacheUsageLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putDataStorage">putDataStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putEcpuPerSecond">putEcpuPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetDataStorage">resetDataStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetEcpuPerSecond">resetEcpuPerSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataStorage` <a name="putDataStorage" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putDataStorage"></a>

```java
public void putDataStorage(IResolvable|java.util.List<ElasticacheServerlessCacheCacheUsageLimitsDataStorage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putDataStorage.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>>

---

##### `putEcpuPerSecond` <a name="putEcpuPerSecond" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putEcpuPerSecond"></a>

```java
public void putEcpuPerSecond(IResolvable|java.util.List<ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putEcpuPerSecond.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>>

---

##### `resetDataStorage` <a name="resetDataStorage" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetDataStorage"></a>

```java
public void resetDataStorage()
```

##### `resetEcpuPerSecond` <a name="resetEcpuPerSecond" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetEcpuPerSecond"></a>

```java
public void resetEcpuPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorage">dataStorage</a></code> | <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList">ElasticacheServerlessCacheCacheUsageLimitsDataStorageList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecond">ecpuPerSecond</a></code> | <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorageInput">dataStorageInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecondInput">ecpuPerSecondInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataStorage`<sup>Required</sup> <a name="dataStorage" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorage"></a>

```java
public ElasticacheServerlessCacheCacheUsageLimitsDataStorageList getDataStorage();
```

- *Type:* <a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageList">ElasticacheServerlessCacheCacheUsageLimitsDataStorageList</a>

---

##### `ecpuPerSecond`<sup>Required</sup> <a name="ecpuPerSecond" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecond"></a>

```java
public ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList getEcpuPerSecond();
```

- *Type:* <a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondList</a>

---

##### `dataStorageInput`<sup>Optional</sup> <a name="dataStorageInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorageInput"></a>

```java
public IResolvable|java.util.List<ElasticacheServerlessCacheCacheUsageLimitsDataStorage> getDataStorageInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>>

---

##### `ecpuPerSecondInput`<sup>Optional</sup> <a name="ecpuPerSecondInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecondInput"></a>

```java
public IResolvable|java.util.List<ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond> getEcpuPerSecondInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticacheServerlessCacheCacheUsageLimits getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>

---


### ElasticacheServerlessCacheEndpointList <a name="ElasticacheServerlessCacheEndpointList" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCacheEndpointList;

new ElasticacheServerlessCacheEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.get"></a>

```java
public ElasticacheServerlessCacheEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ElasticacheServerlessCacheEndpointOutputReference <a name="ElasticacheServerlessCacheEndpointOutputReference" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCacheEndpointOutputReference;

new ElasticacheServerlessCacheEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint">ElasticacheServerlessCacheEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.internalValue"></a>

```java
public ElasticacheServerlessCacheEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint">ElasticacheServerlessCacheEndpoint</a>

---


### ElasticacheServerlessCacheReaderEndpointList <a name="ElasticacheServerlessCacheReaderEndpointList" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCacheReaderEndpointList;

new ElasticacheServerlessCacheReaderEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.get"></a>

```java
public ElasticacheServerlessCacheReaderEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ElasticacheServerlessCacheReaderEndpointOutputReference <a name="ElasticacheServerlessCacheReaderEndpointOutputReference" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCacheReaderEndpointOutputReference;

new ElasticacheServerlessCacheReaderEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint">ElasticacheServerlessCacheReaderEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.internalValue"></a>

```java
public ElasticacheServerlessCacheReaderEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint">ElasticacheServerlessCacheReaderEndpoint</a>

---


### ElasticacheServerlessCacheTimeoutsOutputReference <a name="ElasticacheServerlessCacheTimeoutsOutputReference" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.elasticache_serverless_cache.ElasticacheServerlessCacheTimeoutsOutputReference;

new ElasticacheServerlessCacheTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticacheServerlessCacheTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.elasticacheServerlessCache.ElasticacheServerlessCacheTimeouts">ElasticacheServerlessCacheTimeouts</a>

---



