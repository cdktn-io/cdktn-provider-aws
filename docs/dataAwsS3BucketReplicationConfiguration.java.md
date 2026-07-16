# `dataAwsS3BucketReplicationConfiguration` Submodule <a name="`dataAwsS3BucketReplicationConfiguration` Submodule" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3BucketReplicationConfiguration <a name="DataAwsS3BucketReplicationConfiguration" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/s3_bucket_replication_configuration aws_s3_bucket_replication_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfiguration;

DataAwsS3BucketReplicationConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bucket(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/s3_bucket_replication_configuration#bucket DataAwsS3BucketReplicationConfiguration#bucket}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/s3_bucket_replication_configuration#bucket DataAwsS3BucketReplicationConfiguration#bucket}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/s3_bucket_replication_configuration#region DataAwsS3BucketReplicationConfiguration#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsS3BucketReplicationConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfiguration;

DataAwsS3BucketReplicationConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfiguration;

DataAwsS3BucketReplicationConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfiguration;

DataAwsS3BucketReplicationConfiguration.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfiguration;

DataAwsS3BucketReplicationConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsS3BucketReplicationConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsS3BucketReplicationConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsS3BucketReplicationConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsS3BucketReplicationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/s3_bucket_replication_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsS3BucketReplicationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList">DataAwsS3BucketReplicationConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.rule"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleList getRule();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList">DataAwsS3BucketReplicationConfigurationRuleList</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3BucketReplicationConfigurationConfig <a name="DataAwsS3BucketReplicationConfigurationConfig" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationConfig;

DataAwsS3BucketReplicationConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bucket(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/s3_bucket_replication_configuration#bucket DataAwsS3BucketReplicationConfiguration#bucket}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/s3_bucket_replication_configuration#bucket DataAwsS3BucketReplicationConfiguration#bucket}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/s3_bucket_replication_configuration#region DataAwsS3BucketReplicationConfiguration#region}

---

### DataAwsS3BucketReplicationConfigurationRule <a name="DataAwsS3BucketReplicationConfigurationRule" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRule.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRule;

DataAwsS3BucketReplicationConfigurationRule.builder()
    .build();
```


### DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication <a name="DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication;

DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication.builder()
    .build();
```


### DataAwsS3BucketReplicationConfigurationRuleDestination <a name="DataAwsS3BucketReplicationConfigurationRuleDestination" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestination.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestination;

DataAwsS3BucketReplicationConfigurationRuleDestination.builder()
    .build();
```


### DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation;

DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation.builder()
    .build();
```


### DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration;

DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration.builder()
    .build();
```


### DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics;

DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics.builder()
    .build();
```


### DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold;

DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold.builder()
    .build();
```


### DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime;

DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime.builder()
    .build();
```


### DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime;

DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime.builder()
    .build();
```


### DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication <a name="DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication;

DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication.builder()
    .build();
```


### DataAwsS3BucketReplicationConfigurationRuleFilter <a name="DataAwsS3BucketReplicationConfigurationRuleFilter" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleFilter;

DataAwsS3BucketReplicationConfigurationRuleFilter.builder()
    .build();
```


### DataAwsS3BucketReplicationConfigurationRuleFilterAnd <a name="DataAwsS3BucketReplicationConfigurationRuleFilterAnd" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAnd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAnd.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleFilterAnd;

DataAwsS3BucketReplicationConfigurationRuleFilterAnd.builder()
    .build();
```


### DataAwsS3BucketReplicationConfigurationRuleFilterAndTag <a name="DataAwsS3BucketReplicationConfigurationRuleFilterAndTag" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTag.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTag;

DataAwsS3BucketReplicationConfigurationRuleFilterAndTag.builder()
    .build();
```


### DataAwsS3BucketReplicationConfigurationRuleFilterTag <a name="DataAwsS3BucketReplicationConfigurationRuleFilterTag" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTag.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleFilterTag;

DataAwsS3BucketReplicationConfigurationRuleFilterTag.builder()
    .build();
```


### DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria <a name="DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria;

DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria.builder()
    .build();
```


### DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications <a name="DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications;

DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications.builder()
    .build();
```


### DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects <a name="DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects;

DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList <a name="DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList;

new DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.get"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference;

new DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication">DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication">DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication</a>

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList;

new DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.get"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference;

new DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a>

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList;

new DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.get"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference;

new DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.replicaKmsKeyId">replicaKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `replicaKmsKeyId`<sup>Required</sup> <a name="replicaKmsKeyId" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.replicaKmsKeyId"></a>

```java
public java.lang.String getReplicaKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a>

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationList <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationList;

new DataAwsS3BucketReplicationConfigurationRuleDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.get"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList;

new DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.get"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference;

new DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a>

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList;

new DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.get"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference;

new DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.eventThreshold">eventThreshold</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList">DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics">DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventThreshold`<sup>Required</sup> <a name="eventThreshold" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.eventThreshold"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList getEventThreshold();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList">DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics">DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics</a>

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference;

new DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.accessControlTranslation">accessControlTranslation</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList">DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.account">account</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList">DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList">DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.replicationTime">replicationTime</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList">DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestination">DataAwsS3BucketReplicationConfigurationRuleDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessControlTranslation`<sup>Required</sup> <a name="accessControlTranslation" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.accessControlTranslation"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList getAccessControlTranslation();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList">DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList</a>

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.account"></a>

```java
public java.lang.String getAccount();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.encryptionConfiguration"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList">DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList</a>

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.metrics"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList getMetrics();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList">DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList</a>

---

##### `replicationTime`<sup>Required</sup> <a name="replicationTime" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.replicationTime"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList getReplicationTime();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList">DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList</a>

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestination getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestination">DataAwsS3BucketReplicationConfigurationRuleDestination</a>

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList;

new DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.get"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference;

new DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.time">time</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList">DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime">DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.time"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList getTime();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList">DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime">DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime</a>

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList;

new DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.get"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference;

new DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a>

---


### DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList <a name="DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList;

new DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.get"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference;

new DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication">DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication">DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication</a>

---


### DataAwsS3BucketReplicationConfigurationRuleFilterAndList <a name="DataAwsS3BucketReplicationConfigurationRuleFilterAndList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList;

new DataAwsS3BucketReplicationConfigurationRuleFilterAndList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.get"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference;

new DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList">DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAnd">DataAwsS3BucketReplicationConfigurationRuleFilterAnd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.tag"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList getTag();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList">DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleFilterAnd getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAnd">DataAwsS3BucketReplicationConfigurationRuleFilterAnd</a>

---


### DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList <a name="DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList;

new DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.get"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference;

new DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTag">DataAwsS3BucketReplicationConfigurationRuleFilterAndTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleFilterAndTag getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTag">DataAwsS3BucketReplicationConfigurationRuleFilterAndTag</a>

---


### DataAwsS3BucketReplicationConfigurationRuleFilterList <a name="DataAwsS3BucketReplicationConfigurationRuleFilterList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleFilterList;

new DataAwsS3BucketReplicationConfigurationRuleFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.get"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference;

new DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.and">and</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList">DataAwsS3BucketReplicationConfigurationRuleFilterAndList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList">DataAwsS3BucketReplicationConfigurationRuleFilterTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilter">DataAwsS3BucketReplicationConfigurationRuleFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.and"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleFilterAndList getAnd();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList">DataAwsS3BucketReplicationConfigurationRuleFilterAndList</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.tag"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleFilterTagList getTag();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList">DataAwsS3BucketReplicationConfigurationRuleFilterTagList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleFilter getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilter">DataAwsS3BucketReplicationConfigurationRuleFilter</a>

---


### DataAwsS3BucketReplicationConfigurationRuleFilterTagList <a name="DataAwsS3BucketReplicationConfigurationRuleFilterTagList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList;

new DataAwsS3BucketReplicationConfigurationRuleFilterTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.get"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference;

new DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTag">DataAwsS3BucketReplicationConfigurationRuleFilterTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleFilterTag getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTag">DataAwsS3BucketReplicationConfigurationRuleFilterTag</a>

---


### DataAwsS3BucketReplicationConfigurationRuleList <a name="DataAwsS3BucketReplicationConfigurationRuleList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleList;

new DataAwsS3BucketReplicationConfigurationRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.get"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketReplicationConfigurationRuleOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleOutputReference;

new DataAwsS3BucketReplicationConfigurationRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.deleteMarkerReplication">deleteMarkerReplication</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList">DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList">DataAwsS3BucketReplicationConfigurationRuleDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.existingObjectReplication">existingObjectReplication</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList">DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList">DataAwsS3BucketReplicationConfigurationRuleFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.sourceSelectionCriteria">sourceSelectionCriteria</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRule">DataAwsS3BucketReplicationConfigurationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteMarkerReplication`<sup>Required</sup> <a name="deleteMarkerReplication" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.deleteMarkerReplication"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList getDeleteMarkerReplication();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList">DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList</a>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.destination"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleDestinationList getDestination();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList">DataAwsS3BucketReplicationConfigurationRuleDestinationList</a>

---

##### `existingObjectReplication`<sup>Required</sup> <a name="existingObjectReplication" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.existingObjectReplication"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList getExistingObjectReplication();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList">DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.filter"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList">DataAwsS3BucketReplicationConfigurationRuleFilterList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `sourceSelectionCriteria`<sup>Required</sup> <a name="sourceSelectionCriteria" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.sourceSelectionCriteria"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList getSourceSelectionCriteria();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketReplicationConfigurationRule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRule">DataAwsS3BucketReplicationConfigurationRule</a>

---


### DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList <a name="DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList;

new DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.get"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference;

new DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.replicaModifications">replicaModifications</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjects">sseKmsEncryptedObjects</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `replicaModifications`<sup>Required</sup> <a name="replicaModifications" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.replicaModifications"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList getReplicaModifications();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList</a>

---

##### `sseKmsEncryptedObjects`<sup>Required</sup> <a name="sseKmsEncryptedObjects" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjects"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList getSseKmsEncryptedObjects();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria</a>

---


### DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList <a name="DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList;

new DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.get"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference;

new DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a>

---


### DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList <a name="DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList;

new DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.get"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_replication_configuration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference;

new DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a>

---



