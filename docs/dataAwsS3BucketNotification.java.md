# `dataAwsS3BucketNotification` Submodule <a name="`dataAwsS3BucketNotification` Submodule" id="@cdktn/provider-aws.dataAwsS3BucketNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3BucketNotification <a name="DataAwsS3BucketNotification" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/s3_bucket_notification aws_s3_bucket_notification}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_notification.DataAwsS3BucketNotification;

DataAwsS3BucketNotification.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/s3_bucket_notification#bucket DataAwsS3BucketNotification#bucket}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/s3_bucket_notification#bucket DataAwsS3BucketNotification#bucket}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/s3_bucket_notification#region DataAwsS3BucketNotification#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsS3BucketNotification resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_notification.DataAwsS3BucketNotification;

DataAwsS3BucketNotification.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_notification.DataAwsS3BucketNotification;

DataAwsS3BucketNotification.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_notification.DataAwsS3BucketNotification;

DataAwsS3BucketNotification.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_notification.DataAwsS3BucketNotification;

DataAwsS3BucketNotification.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsS3BucketNotification.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsS3BucketNotification resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsS3BucketNotification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsS3BucketNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/s3_bucket_notification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsS3BucketNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.eventbridge">eventbridge</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.lambdaFunction">lambdaFunction</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList">DataAwsS3BucketNotificationLambdaFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.queue">queue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList">DataAwsS3BucketNotificationQueueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.topic">topic</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList">DataAwsS3BucketNotificationTopicList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `eventbridge`<sup>Required</sup> <a name="eventbridge" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.eventbridge"></a>

```java
public IResolvable getEventbridge();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `lambdaFunction`<sup>Required</sup> <a name="lambdaFunction" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.lambdaFunction"></a>

```java
public DataAwsS3BucketNotificationLambdaFunctionList getLambdaFunction();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList">DataAwsS3BucketNotificationLambdaFunctionList</a>

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.queue"></a>

```java
public DataAwsS3BucketNotificationQueueList getQueue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList">DataAwsS3BucketNotificationQueueList</a>

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.topic"></a>

```java
public DataAwsS3BucketNotificationTopicList getTopic();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList">DataAwsS3BucketNotificationTopicList</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotification.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3BucketNotificationConfig <a name="DataAwsS3BucketNotificationConfig" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_notification.DataAwsS3BucketNotificationConfig;

DataAwsS3BucketNotificationConfig.builder()
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
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/s3_bucket_notification#bucket DataAwsS3BucketNotification#bucket}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/s3_bucket_notification#bucket DataAwsS3BucketNotification#bucket}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/s3_bucket_notification#region DataAwsS3BucketNotification#region}

---

### DataAwsS3BucketNotificationLambdaFunction <a name="DataAwsS3BucketNotificationLambdaFunction" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunction.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_notification.DataAwsS3BucketNotificationLambdaFunction;

DataAwsS3BucketNotificationLambdaFunction.builder()
    .build();
```


### DataAwsS3BucketNotificationQueue <a name="DataAwsS3BucketNotificationQueue" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueue.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_notification.DataAwsS3BucketNotificationQueue;

DataAwsS3BucketNotificationQueue.builder()
    .build();
```


### DataAwsS3BucketNotificationTopic <a name="DataAwsS3BucketNotificationTopic" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopic.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_notification.DataAwsS3BucketNotificationTopic;

DataAwsS3BucketNotificationTopic.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3BucketNotificationLambdaFunctionList <a name="DataAwsS3BucketNotificationLambdaFunctionList" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_notification.DataAwsS3BucketNotificationLambdaFunctionList;

new DataAwsS3BucketNotificationLambdaFunctionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.get"></a>

```java
public DataAwsS3BucketNotificationLambdaFunctionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketNotificationLambdaFunctionOutputReference <a name="DataAwsS3BucketNotificationLambdaFunctionOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_notification.DataAwsS3BucketNotificationLambdaFunctionOutputReference;

new DataAwsS3BucketNotificationLambdaFunctionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.property.filterPrefix">filterPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.property.filterSuffix">filterSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.property.lambdaFunctionArn">lambdaFunctionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunction">DataAwsS3BucketNotificationLambdaFunction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterPrefix`<sup>Required</sup> <a name="filterPrefix" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.property.filterPrefix"></a>

```java
public java.lang.String getFilterPrefix();
```

- *Type:* java.lang.String

---

##### `filterSuffix`<sup>Required</sup> <a name="filterSuffix" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.property.filterSuffix"></a>

```java
public java.lang.String getFilterSuffix();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lambdaFunctionArn`<sup>Required</sup> <a name="lambdaFunctionArn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.property.lambdaFunctionArn"></a>

```java
public java.lang.String getLambdaFunctionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunctionOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketNotificationLambdaFunction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationLambdaFunction">DataAwsS3BucketNotificationLambdaFunction</a>

---


### DataAwsS3BucketNotificationQueueList <a name="DataAwsS3BucketNotificationQueueList" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_notification.DataAwsS3BucketNotificationQueueList;

new DataAwsS3BucketNotificationQueueList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.get"></a>

```java
public DataAwsS3BucketNotificationQueueOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketNotificationQueueOutputReference <a name="DataAwsS3BucketNotificationQueueOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_notification.DataAwsS3BucketNotificationQueueOutputReference;

new DataAwsS3BucketNotificationQueueOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.property.filterPrefix">filterPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.property.filterSuffix">filterSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.property.queueArn">queueArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueue">DataAwsS3BucketNotificationQueue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterPrefix`<sup>Required</sup> <a name="filterPrefix" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.property.filterPrefix"></a>

```java
public java.lang.String getFilterPrefix();
```

- *Type:* java.lang.String

---

##### `filterSuffix`<sup>Required</sup> <a name="filterSuffix" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.property.filterSuffix"></a>

```java
public java.lang.String getFilterSuffix();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `queueArn`<sup>Required</sup> <a name="queueArn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.property.queueArn"></a>

```java
public java.lang.String getQueueArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueueOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketNotificationQueue getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationQueue">DataAwsS3BucketNotificationQueue</a>

---


### DataAwsS3BucketNotificationTopicList <a name="DataAwsS3BucketNotificationTopicList" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_notification.DataAwsS3BucketNotificationTopicList;

new DataAwsS3BucketNotificationTopicList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.get"></a>

```java
public DataAwsS3BucketNotificationTopicOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3BucketNotificationTopicOutputReference <a name="DataAwsS3BucketNotificationTopicOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_bucket_notification.DataAwsS3BucketNotificationTopicOutputReference;

new DataAwsS3BucketNotificationTopicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.property.events">events</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.property.filterPrefix">filterPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.property.filterSuffix">filterSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.property.topicArn">topicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopic">DataAwsS3BucketNotificationTopic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.property.events"></a>

```java
public java.util.List<java.lang.String> getEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterPrefix`<sup>Required</sup> <a name="filterPrefix" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.property.filterPrefix"></a>

```java
public java.lang.String getFilterPrefix();
```

- *Type:* java.lang.String

---

##### `filterSuffix`<sup>Required</sup> <a name="filterSuffix" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.property.filterSuffix"></a>

```java
public java.lang.String getFilterSuffix();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.property.topicArn"></a>

```java
public java.lang.String getTopicArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopicOutputReference.property.internalValue"></a>

```java
public DataAwsS3BucketNotificationTopic getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketNotification.DataAwsS3BucketNotificationTopic">DataAwsS3BucketNotificationTopic</a>

---



