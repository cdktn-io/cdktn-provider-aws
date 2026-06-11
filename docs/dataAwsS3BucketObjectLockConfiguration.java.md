# `dataAwsS3BucketObjectLockConfiguration` Submodule <a name="`dataAwsS3BucketObjectLockConfiguration` Submodule" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3BucketObjectLockConfiguration <a name="DataAwsS3BucketObjectLockConfiguration" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3_bucket_object_lock_configuration aws_s3_bucket_object_lock_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_object_lock_configuration.DataAwsS3BucketObjectLockConfiguration;

DataAwsS3BucketObjectLockConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bucket(java.lang.String)
//  .expectedBucketOwner(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3_bucket_object_lock_configuration#bucket DataAwsS3BucketObjectLockConfiguration#bucket}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3_bucket_object_lock_configuration#expected_bucket_owner DataAwsS3BucketObjectLockConfiguration#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3_bucket_object_lock_configuration#bucket DataAwsS3BucketObjectLockConfiguration#bucket}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.expectedBucketOwner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3_bucket_object_lock_configuration#expected_bucket_owner DataAwsS3BucketObjectLockConfiguration#expected_bucket_owner}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3_bucket_object_lock_configuration#region DataAwsS3BucketObjectLockConfiguration#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.resetExpectedBucketOwner"></a>

```java
public void resetExpectedBucketOwner()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsS3BucketObjectLockConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_object_lock_configuration.DataAwsS3BucketObjectLockConfiguration;

DataAwsS3BucketObjectLockConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_object_lock_configuration.DataAwsS3BucketObjectLockConfiguration;

DataAwsS3BucketObjectLockConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_object_lock_configuration.DataAwsS3BucketObjectLockConfiguration;

DataAwsS3BucketObjectLockConfiguration.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_object_lock_configuration.DataAwsS3BucketObjectLockConfiguration;

DataAwsS3BucketObjectLockConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsS3BucketObjectLockConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsS3BucketObjectLockConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsS3BucketObjectLockConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsS3BucketObjectLockConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3_bucket_object_lock_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsS3BucketObjectLockConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.objectLockEnabled">objectLockEnabled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList">DataAwsS3BucketObjectLockConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `objectLockEnabled`<sup>Required</sup> <a name="objectLockEnabled" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.objectLockEnabled"></a>

```java
public java.lang.String getObjectLockEnabled();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.rule"></a>

```java
public DataAwsS3BucketObjectLockConfigurationRuleList getRule();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList">DataAwsS3BucketObjectLockConfigurationRuleList</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.expectedBucketOwnerInput"></a>

```java
public java.lang.String getExpectedBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3BucketObjectLockConfigurationConfig <a name="DataAwsS3BucketObjectLockConfigurationConfig" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_object_lock_configuration.DataAwsS3BucketObjectLockConfigurationConfig;

DataAwsS3BucketObjectLockConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bucket(java.lang.String)
//  .expectedBucketOwner(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3_bucket_object_lock_configuration#bucket DataAwsS3BucketObjectLockConfiguration#bucket}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3_bucket_object_lock_configuration#expected_bucket_owner DataAwsS3BucketObjectLockConfiguration#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3_bucket_object_lock_configuration#bucket DataAwsS3BucketObjectLockConfiguration#bucket}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.expectedBucketOwner"></a>

```java
public java.lang.String getExpectedBucketOwner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3_bucket_object_lock_configuration#expected_bucket_owner DataAwsS3BucketObjectLockConfiguration#expected_bucket_owner}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3_bucket_object_lock_configuration#region DataAwsS3BucketObjectLockConfiguration#region}

---

### DataAwsS3BucketObjectLockConfigurationRule <a name="DataAwsS3BucketObjectLockConfigurationRule" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRule.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_object_lock_configuration.DataAwsS3BucketObjectLockConfigurationRule;

DataAwsS3BucketObjectLockConfigurationRule.builder()
    .build();
```


### DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention <a name="DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_object_lock_configuration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention;

DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList <a name="DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_object_lock_configuration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList;

new DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.get"></a>

```java
public DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference <a name="DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_object_lock_configuration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference;

new DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.days">days</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.years">years</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention">DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `years`<sup>Required</sup> <a name="years" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.years"></a>

```java
public java.lang.Number getYears();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention">DataAwsS3BucketObjectLockConfigurationRuleDefaultRetention</a>

---


### DataAwsS3BucketObjectLockConfigurationRuleList <a name="DataAwsS3BucketObjectLockConfigurationRuleList" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_object_lock_configuration.DataAwsS3BucketObjectLockConfigurationRuleList;

new DataAwsS3BucketObjectLockConfigurationRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.get"></a>

```java
public DataAwsS3BucketObjectLockConfigurationRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketObjectLockConfigurationRuleOutputReference <a name="DataAwsS3BucketObjectLockConfigurationRuleOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_object_lock_configuration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference;

new DataAwsS3BucketObjectLockConfigurationRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetention">defaultRetention</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList">DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRule">DataAwsS3BucketObjectLockConfigurationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultRetention`<sup>Required</sup> <a name="defaultRetention" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetention"></a>

```java
public DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList getDefaultRetention();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList">DataAwsS3BucketObjectLockConfigurationRuleDefaultRetentionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRuleOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketObjectLockConfigurationRule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketObjectLockConfiguration.DataAwsS3BucketObjectLockConfigurationRule">DataAwsS3BucketObjectLockConfigurationRule</a>

---



