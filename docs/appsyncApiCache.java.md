# `appsyncApiCache` Submodule <a name="`appsyncApiCache` Submodule" id="@cdktn/provider-aws.appsyncApiCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncApiCache <a name="AppsyncApiCache" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache aws_appsync_api_cache}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer"></a>

```java
import io.cdktn.providers.aws.appsync_api_cache.AppsyncApiCache;

AppsyncApiCache.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiCachingBehavior(java.lang.String)
    .apiId(java.lang.String)
    .ttl(java.lang.Number)
    .type(java.lang.String)
//  .atRestEncryptionEnabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .transitEncryptionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.apiCachingBehavior">apiCachingBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#api_caching_behavior AppsyncApiCache#api_caching_behavior}. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#api_id AppsyncApiCache#api_id}. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#ttl AppsyncApiCache#ttl}. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#type AppsyncApiCache#type}. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#at_rest_encryption_enabled AppsyncApiCache#at_rest_encryption_enabled}. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#id AppsyncApiCache#id}. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#transit_encryption_enabled AppsyncApiCache#transit_encryption_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiCachingBehavior`<sup>Required</sup> <a name="apiCachingBehavior" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.apiCachingBehavior"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#api_caching_behavior AppsyncApiCache#api_caching_behavior}.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.apiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#api_id AppsyncApiCache#api_id}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#ttl AppsyncApiCache#ttl}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#type AppsyncApiCache#type}.

---

##### `atRestEncryptionEnabled`<sup>Optional</sup> <a name="atRestEncryptionEnabled" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.atRestEncryptionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#at_rest_encryption_enabled AppsyncApiCache#at_rest_encryption_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#id AppsyncApiCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#region AppsyncApiCache#region}

---

##### `transitEncryptionEnabled`<sup>Optional</sup> <a name="transitEncryptionEnabled" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.Initializer.parameter.transitEncryptionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#transit_encryption_enabled AppsyncApiCache#transit_encryption_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.resetAtRestEncryptionEnabled">resetAtRestEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.resetTransitEncryptionEnabled">resetTransitEncryptionEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAtRestEncryptionEnabled` <a name="resetAtRestEncryptionEnabled" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.resetAtRestEncryptionEnabled"></a>

```java
public void resetAtRestEncryptionEnabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTransitEncryptionEnabled` <a name="resetTransitEncryptionEnabled" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.resetTransitEncryptionEnabled"></a>

```java
public void resetTransitEncryptionEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppsyncApiCache resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.isConstruct"></a>

```java
import io.cdktn.providers.aws.appsync_api_cache.AppsyncApiCache;

AppsyncApiCache.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.appsync_api_cache.AppsyncApiCache;

AppsyncApiCache.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.appsync_api_cache.AppsyncApiCache;

AppsyncApiCache.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.appsync_api_cache.AppsyncApiCache;

AppsyncApiCache.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppsyncApiCache.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppsyncApiCache resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppsyncApiCache to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppsyncApiCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppsyncApiCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiCachingBehaviorInput">apiCachingBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.atRestEncryptionEnabledInput">atRestEncryptionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.transitEncryptionEnabledInput">transitEncryptionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiCachingBehavior">apiCachingBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiCachingBehaviorInput`<sup>Optional</sup> <a name="apiCachingBehaviorInput" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiCachingBehaviorInput"></a>

```java
public java.lang.String getApiCachingBehaviorInput();
```

- *Type:* java.lang.String

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `atRestEncryptionEnabledInput`<sup>Optional</sup> <a name="atRestEncryptionEnabledInput" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.atRestEncryptionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAtRestEncryptionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `transitEncryptionEnabledInput`<sup>Optional</sup> <a name="transitEncryptionEnabledInput" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.transitEncryptionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getTransitEncryptionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `apiCachingBehavior`<sup>Required</sup> <a name="apiCachingBehavior" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiCachingBehavior"></a>

```java
public java.lang.String getApiCachingBehavior();
```

- *Type:* java.lang.String

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `atRestEncryptionEnabled`<sup>Required</sup> <a name="atRestEncryptionEnabled" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.atRestEncryptionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAtRestEncryptionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `transitEncryptionEnabled`<sup>Required</sup> <a name="transitEncryptionEnabled" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.transitEncryptionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTransitEncryptionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCache.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncApiCacheConfig <a name="AppsyncApiCacheConfig" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.appsync_api_cache.AppsyncApiCacheConfig;

AppsyncApiCacheConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiCachingBehavior(java.lang.String)
    .apiId(java.lang.String)
    .ttl(java.lang.Number)
    .type(java.lang.String)
//  .atRestEncryptionEnabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .transitEncryptionEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.apiCachingBehavior">apiCachingBehavior</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#api_caching_behavior AppsyncApiCache#api_caching_behavior}. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#api_id AppsyncApiCache#api_id}. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#ttl AppsyncApiCache#ttl}. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#type AppsyncApiCache#type}. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.atRestEncryptionEnabled">atRestEncryptionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#at_rest_encryption_enabled AppsyncApiCache#at_rest_encryption_enabled}. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#id AppsyncApiCache#id}. |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.transitEncryptionEnabled">transitEncryptionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#transit_encryption_enabled AppsyncApiCache#transit_encryption_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiCachingBehavior`<sup>Required</sup> <a name="apiCachingBehavior" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.apiCachingBehavior"></a>

```java
public java.lang.String getApiCachingBehavior();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#api_caching_behavior AppsyncApiCache#api_caching_behavior}.

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#api_id AppsyncApiCache#api_id}.

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#ttl AppsyncApiCache#ttl}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#type AppsyncApiCache#type}.

---

##### `atRestEncryptionEnabled`<sup>Optional</sup> <a name="atRestEncryptionEnabled" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.atRestEncryptionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAtRestEncryptionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#at_rest_encryption_enabled AppsyncApiCache#at_rest_encryption_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#id AppsyncApiCache#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#region AppsyncApiCache#region}

---

##### `transitEncryptionEnabled`<sup>Optional</sup> <a name="transitEncryptionEnabled" id="@cdktn/provider-aws.appsyncApiCache.AppsyncApiCacheConfig.property.transitEncryptionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTransitEncryptionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/appsync_api_cache#transit_encryption_enabled AppsyncApiCache#transit_encryption_enabled}.

---



