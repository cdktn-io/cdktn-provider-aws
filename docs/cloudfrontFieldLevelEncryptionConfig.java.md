# `cloudfrontFieldLevelEncryptionConfig` Submodule <a name="`cloudfrontFieldLevelEncryptionConfig` Submodule" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontFieldLevelEncryptionConfig <a name="CloudfrontFieldLevelEncryptionConfig" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config aws_cloudfront_field_level_encryption_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfig;

CloudfrontFieldLevelEncryptionConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .contentTypeProfileConfig(CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig)
    .queryArgProfileConfig(CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig)
//  .comment(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.contentTypeProfileConfig">contentTypeProfileConfig</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig</a></code> | content_type_profile_config block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.queryArgProfileConfig">queryArgProfileConfig</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig</a></code> | query_arg_profile_config block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#comment CloudfrontFieldLevelEncryptionConfig#comment}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#id CloudfrontFieldLevelEncryptionConfig#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `contentTypeProfileConfig`<sup>Required</sup> <a name="contentTypeProfileConfig" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.contentTypeProfileConfig"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig</a>

content_type_profile_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#content_type_profile_config CloudfrontFieldLevelEncryptionConfig#content_type_profile_config}

---

##### `queryArgProfileConfig`<sup>Required</sup> <a name="queryArgProfileConfig" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.queryArgProfileConfig"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig</a>

query_arg_profile_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#query_arg_profile_config CloudfrontFieldLevelEncryptionConfig#query_arg_profile_config}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#comment CloudfrontFieldLevelEncryptionConfig#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#id CloudfrontFieldLevelEncryptionConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.putContentTypeProfileConfig">putContentTypeProfileConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.putQueryArgProfileConfig">putQueryArgProfileConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContentTypeProfileConfig` <a name="putContentTypeProfileConfig" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.putContentTypeProfileConfig"></a>

```java
public void putContentTypeProfileConfig(CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.putContentTypeProfileConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig</a>

---

##### `putQueryArgProfileConfig` <a name="putQueryArgProfileConfig" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.putQueryArgProfileConfig"></a>

```java
public void putQueryArgProfileConfig(CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.putQueryArgProfileConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontFieldLevelEncryptionConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.isConstruct"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfig;

CloudfrontFieldLevelEncryptionConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfig;

CloudfrontFieldLevelEncryptionConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfig;

CloudfrontFieldLevelEncryptionConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfig;

CloudfrontFieldLevelEncryptionConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudfrontFieldLevelEncryptionConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudfrontFieldLevelEncryptionConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudfrontFieldLevelEncryptionConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudfrontFieldLevelEncryptionConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontFieldLevelEncryptionConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.callerReference">callerReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.contentTypeProfileConfig">contentTypeProfileConfig</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.queryArgProfileConfig">queryArgProfileConfig</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.contentTypeProfileConfigInput">contentTypeProfileConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.queryArgProfileConfigInput">queryArgProfileConfigInput</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `callerReference`<sup>Required</sup> <a name="callerReference" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.callerReference"></a>

```java
public java.lang.String getCallerReference();
```

- *Type:* java.lang.String

---

##### `contentTypeProfileConfig`<sup>Required</sup> <a name="contentTypeProfileConfig" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.contentTypeProfileConfig"></a>

```java
public CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference getContentTypeProfileConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `queryArgProfileConfig`<sup>Required</sup> <a name="queryArgProfileConfig" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.queryArgProfileConfig"></a>

```java
public CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference getQueryArgProfileConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeProfileConfigInput`<sup>Optional</sup> <a name="contentTypeProfileConfigInput" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.contentTypeProfileConfigInput"></a>

```java
public CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig getContentTypeProfileConfigInput();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `queryArgProfileConfigInput`<sup>Optional</sup> <a name="queryArgProfileConfigInput" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.queryArgProfileConfigInput"></a>

```java
public CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig getQueryArgProfileConfigInput();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontFieldLevelEncryptionConfigConfig <a name="CloudfrontFieldLevelEncryptionConfigConfig" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfigConfig;

CloudfrontFieldLevelEncryptionConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .contentTypeProfileConfig(CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig)
    .queryArgProfileConfig(CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig)
//  .comment(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.contentTypeProfileConfig">contentTypeProfileConfig</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig</a></code> | content_type_profile_config block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.queryArgProfileConfig">queryArgProfileConfig</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig</a></code> | query_arg_profile_config block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#comment CloudfrontFieldLevelEncryptionConfig#comment}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#id CloudfrontFieldLevelEncryptionConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `contentTypeProfileConfig`<sup>Required</sup> <a name="contentTypeProfileConfig" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.contentTypeProfileConfig"></a>

```java
public CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig getContentTypeProfileConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig</a>

content_type_profile_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#content_type_profile_config CloudfrontFieldLevelEncryptionConfig#content_type_profile_config}

---

##### `queryArgProfileConfig`<sup>Required</sup> <a name="queryArgProfileConfig" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.queryArgProfileConfig"></a>

```java
public CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig getQueryArgProfileConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig</a>

query_arg_profile_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#query_arg_profile_config CloudfrontFieldLevelEncryptionConfig#query_arg_profile_config}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#comment CloudfrontFieldLevelEncryptionConfig#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#id CloudfrontFieldLevelEncryptionConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig <a name="CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig;

CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig.builder()
    .contentTypeProfiles(CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles)
    .forwardWhenContentTypeIsUnknown(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig.property.contentTypeProfiles">contentTypeProfiles</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles</a></code> | content_type_profiles block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig.property.forwardWhenContentTypeIsUnknown">forwardWhenContentTypeIsUnknown</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#forward_when_content_type_is_unknown CloudfrontFieldLevelEncryptionConfig#forward_when_content_type_is_unknown}. |

---

##### `contentTypeProfiles`<sup>Required</sup> <a name="contentTypeProfiles" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig.property.contentTypeProfiles"></a>

```java
public CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles getContentTypeProfiles();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles</a>

content_type_profiles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#content_type_profiles CloudfrontFieldLevelEncryptionConfig#content_type_profiles}

---

##### `forwardWhenContentTypeIsUnknown`<sup>Required</sup> <a name="forwardWhenContentTypeIsUnknown" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig.property.forwardWhenContentTypeIsUnknown"></a>

```java
public java.lang.Boolean|IResolvable getForwardWhenContentTypeIsUnknown();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#forward_when_content_type_is_unknown CloudfrontFieldLevelEncryptionConfig#forward_when_content_type_is_unknown}.

---

### CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles <a name="CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles;

CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles.builder()
    .items(IResolvable|java.util.List<CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles.property.items">items</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems</a>></code> | items block. |

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles.property.items"></a>

```java
public IResolvable|java.util.List<CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems> getItems();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems</a>>

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#items CloudfrontFieldLevelEncryptionConfig#items}

---

### CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems <a name="CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems;

CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems.builder()
    .contentType(java.lang.String)
    .format(java.lang.String)
//  .profileId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#content_type CloudfrontFieldLevelEncryptionConfig#content_type}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems.property.format">format</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#format CloudfrontFieldLevelEncryptionConfig#format}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems.property.profileId">profileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#profile_id CloudfrontFieldLevelEncryptionConfig#profile_id}. |

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#content_type CloudfrontFieldLevelEncryptionConfig#content_type}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#format CloudfrontFieldLevelEncryptionConfig#format}.

---

##### `profileId`<sup>Optional</sup> <a name="profileId" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#profile_id CloudfrontFieldLevelEncryptionConfig#profile_id}.

---

### CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig <a name="CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig;

CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig.builder()
    .forwardWhenQueryArgProfileIsUnknown(java.lang.Boolean|IResolvable)
//  .queryArgProfiles(CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig.property.forwardWhenQueryArgProfileIsUnknown">forwardWhenQueryArgProfileIsUnknown</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#forward_when_query_arg_profile_is_unknown CloudfrontFieldLevelEncryptionConfig#forward_when_query_arg_profile_is_unknown}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig.property.queryArgProfiles">queryArgProfiles</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles</a></code> | query_arg_profiles block. |

---

##### `forwardWhenQueryArgProfileIsUnknown`<sup>Required</sup> <a name="forwardWhenQueryArgProfileIsUnknown" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig.property.forwardWhenQueryArgProfileIsUnknown"></a>

```java
public java.lang.Boolean|IResolvable getForwardWhenQueryArgProfileIsUnknown();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#forward_when_query_arg_profile_is_unknown CloudfrontFieldLevelEncryptionConfig#forward_when_query_arg_profile_is_unknown}.

---

##### `queryArgProfiles`<sup>Optional</sup> <a name="queryArgProfiles" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig.property.queryArgProfiles"></a>

```java
public CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles getQueryArgProfiles();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles</a>

query_arg_profiles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#query_arg_profiles CloudfrontFieldLevelEncryptionConfig#query_arg_profiles}

---

### CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles <a name="CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles;

CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles.builder()
//  .items(IResolvable|java.util.List<CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles.property.items">items</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems</a>></code> | items block. |

---

##### `items`<sup>Optional</sup> <a name="items" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles.property.items"></a>

```java
public IResolvable|java.util.List<CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems> getItems();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems</a>>

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#items CloudfrontFieldLevelEncryptionConfig#items}

---

### CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems <a name="CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems;

CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems.builder()
    .profileId(java.lang.String)
    .queryArg(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems.property.profileId">profileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#profile_id CloudfrontFieldLevelEncryptionConfig#profile_id}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems.property.queryArg">queryArg</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#query_arg CloudfrontFieldLevelEncryptionConfig#query_arg}. |

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#profile_id CloudfrontFieldLevelEncryptionConfig#profile_id}.

---

##### `queryArg`<sup>Required</sup> <a name="queryArg" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems.property.queryArg"></a>

```java
public java.lang.String getQueryArg();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/cloudfront_field_level_encryption_config#query_arg CloudfrontFieldLevelEncryptionConfig#query_arg}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList <a name="CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList;

new CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.get"></a>

```java
public CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems</a>>

---


### CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference <a name="CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference;

new CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.resetProfileId">resetProfileId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProfileId` <a name="resetProfileId" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.resetProfileId"></a>

```java
public void resetProfileId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.profileIdInput">profileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.profileIdInput"></a>

```java
public java.lang.String getProfileIdInput();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems</a>

---


### CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference <a name="CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference;

new CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.putItems">putItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.putItems"></a>

```java
public void putItems(IResolvable|java.util.List<CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.putItems.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.items">items</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.itemsInput">itemsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.items"></a>

```java
public CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList getItems();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.itemsInput"></a>

```java
public IResolvable|java.util.List<CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems> getItemsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference.property.internalValue"></a>

```java
public CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles</a>

---


### CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference <a name="CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference;

new CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.putContentTypeProfiles">putContentTypeProfiles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContentTypeProfiles` <a name="putContentTypeProfiles" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.putContentTypeProfiles"></a>

```java
public void putContentTypeProfiles(CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.putContentTypeProfiles.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.contentTypeProfiles">contentTypeProfiles</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.contentTypeProfilesInput">contentTypeProfilesInput</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.forwardWhenContentTypeIsUnknownInput">forwardWhenContentTypeIsUnknownInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.forwardWhenContentTypeIsUnknown">forwardWhenContentTypeIsUnknown</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentTypeProfiles`<sup>Required</sup> <a name="contentTypeProfiles" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.contentTypeProfiles"></a>

```java
public CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference getContentTypeProfiles();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference</a>

---

##### `contentTypeProfilesInput`<sup>Optional</sup> <a name="contentTypeProfilesInput" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.contentTypeProfilesInput"></a>

```java
public CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles getContentTypeProfilesInput();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles</a>

---

##### `forwardWhenContentTypeIsUnknownInput`<sup>Optional</sup> <a name="forwardWhenContentTypeIsUnknownInput" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.forwardWhenContentTypeIsUnknownInput"></a>

```java
public java.lang.Boolean|IResolvable getForwardWhenContentTypeIsUnknownInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `forwardWhenContentTypeIsUnknown`<sup>Required</sup> <a name="forwardWhenContentTypeIsUnknown" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.forwardWhenContentTypeIsUnknown"></a>

```java
public java.lang.Boolean|IResolvable getForwardWhenContentTypeIsUnknown();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference.property.internalValue"></a>

```java
public CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig">CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig</a>

---


### CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference <a name="CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference;

new CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.putQueryArgProfiles">putQueryArgProfiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.resetQueryArgProfiles">resetQueryArgProfiles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putQueryArgProfiles` <a name="putQueryArgProfiles" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.putQueryArgProfiles"></a>

```java
public void putQueryArgProfiles(CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.putQueryArgProfiles.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles</a>

---

##### `resetQueryArgProfiles` <a name="resetQueryArgProfiles" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.resetQueryArgProfiles"></a>

```java
public void resetQueryArgProfiles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.queryArgProfiles">queryArgProfiles</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.forwardWhenQueryArgProfileIsUnknownInput">forwardWhenQueryArgProfileIsUnknownInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.queryArgProfilesInput">queryArgProfilesInput</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.forwardWhenQueryArgProfileIsUnknown">forwardWhenQueryArgProfileIsUnknown</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryArgProfiles`<sup>Required</sup> <a name="queryArgProfiles" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.queryArgProfiles"></a>

```java
public CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference getQueryArgProfiles();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference</a>

---

##### `forwardWhenQueryArgProfileIsUnknownInput`<sup>Optional</sup> <a name="forwardWhenQueryArgProfileIsUnknownInput" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.forwardWhenQueryArgProfileIsUnknownInput"></a>

```java
public java.lang.Boolean|IResolvable getForwardWhenQueryArgProfileIsUnknownInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `queryArgProfilesInput`<sup>Optional</sup> <a name="queryArgProfilesInput" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.queryArgProfilesInput"></a>

```java
public CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles getQueryArgProfilesInput();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles</a>

---

##### `forwardWhenQueryArgProfileIsUnknown`<sup>Required</sup> <a name="forwardWhenQueryArgProfileIsUnknown" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.forwardWhenQueryArgProfileIsUnknown"></a>

```java
public java.lang.Boolean|IResolvable getForwardWhenQueryArgProfileIsUnknown();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference.property.internalValue"></a>

```java
public CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig</a>

---


### CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList <a name="CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList;

new CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.get"></a>

```java
public CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems</a>>

---


### CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference <a name="CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference;

new CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.profileIdInput">profileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.queryArgInput">queryArgInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.queryArg">queryArg</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.profileIdInput"></a>

```java
public java.lang.String getProfileIdInput();
```

- *Type:* java.lang.String

---

##### `queryArgInput`<sup>Optional</sup> <a name="queryArgInput" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.queryArgInput"></a>

```java
public java.lang.String getQueryArgInput();
```

- *Type:* java.lang.String

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

##### `queryArg`<sup>Required</sup> <a name="queryArg" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.queryArg"></a>

```java
public java.lang.String getQueryArg();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems</a>

---


### CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference <a name="CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudfront_field_level_encryption_config.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference;

new CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.putItems">putItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.resetItems">resetItems</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putItems` <a name="putItems" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.putItems"></a>

```java
public void putItems(IResolvable|java.util.List<CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.putItems.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems</a>>

---

##### `resetItems` <a name="resetItems" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.resetItems"></a>

```java
public void resetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.items">items</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.itemsInput">itemsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.items"></a>

```java
public CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList getItems();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList</a>

---

##### `itemsInput`<sup>Optional</sup> <a name="itemsInput" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.itemsInput"></a>

```java
public IResolvable|java.util.List<CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems> getItemsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference.property.internalValue"></a>

```java
public CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontFieldLevelEncryptionConfig.CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles">CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles</a>

---



