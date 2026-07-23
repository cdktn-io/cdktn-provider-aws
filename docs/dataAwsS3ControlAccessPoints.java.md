# `dataAwsS3ControlAccessPoints` Submodule <a name="`dataAwsS3ControlAccessPoints` Submodule" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3ControlAccessPoints <a name="DataAwsS3ControlAccessPoints" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points aws_s3control_access_points}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_access_points.DataAwsS3ControlAccessPoints;

DataAwsS3ControlAccessPoints.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .bucket(java.lang.String)
//  .dataSourceId(java.lang.String)
//  .dataSourceType(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#account_id DataAwsS3ControlAccessPoints#account_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#bucket DataAwsS3ControlAccessPoints#bucket}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#data_source_id DataAwsS3ControlAccessPoints#data_source_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.dataSourceType">dataSourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#data_source_type DataAwsS3ControlAccessPoints#data_source_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#account_id DataAwsS3ControlAccessPoints#account_id}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#bucket DataAwsS3ControlAccessPoints#bucket}.

---

##### `dataSourceId`<sup>Optional</sup> <a name="dataSourceId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.dataSourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#data_source_id DataAwsS3ControlAccessPoints#data_source_id}.

---

##### `dataSourceType`<sup>Optional</sup> <a name="dataSourceType" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.dataSourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#data_source_type DataAwsS3ControlAccessPoints#data_source_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#region DataAwsS3ControlAccessPoints#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetDataSourceId">resetDataSourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetDataSourceType">resetDataSourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetDataSourceId` <a name="resetDataSourceId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetDataSourceId"></a>

```java
public void resetDataSourceId()
```

##### `resetDataSourceType` <a name="resetDataSourceType" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetDataSourceType"></a>

```java
public void resetDataSourceType()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsS3ControlAccessPoints resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_access_points.DataAwsS3ControlAccessPoints;

DataAwsS3ControlAccessPoints.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_access_points.DataAwsS3ControlAccessPoints;

DataAwsS3ControlAccessPoints.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_access_points.DataAwsS3ControlAccessPoints;

DataAwsS3ControlAccessPoints.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_access_points.DataAwsS3ControlAccessPoints;

DataAwsS3ControlAccessPoints.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsS3ControlAccessPoints.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsS3ControlAccessPoints resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsS3ControlAccessPoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsS3ControlAccessPoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsS3ControlAccessPoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.accessPoints">accessPoints</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList">DataAwsS3ControlAccessPointsAccessPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dataSourceTypeInput">dataSourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dataSourceType">dataSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `accessPoints`<sup>Required</sup> <a name="accessPoints" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.accessPoints"></a>

```java
public DataAwsS3ControlAccessPointsAccessPointsList getAccessPoints();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList">DataAwsS3ControlAccessPointsAccessPointsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dataSourceIdInput"></a>

```java
public java.lang.String getDataSourceIdInput();
```

- *Type:* java.lang.String

---

##### `dataSourceTypeInput`<sup>Optional</sup> <a name="dataSourceTypeInput" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dataSourceTypeInput"></a>

```java
public java.lang.String getDataSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `dataSourceType`<sup>Required</sup> <a name="dataSourceType" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dataSourceType"></a>

```java
public java.lang.String getDataSourceType();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3ControlAccessPointsAccessPoints <a name="DataAwsS3ControlAccessPointsAccessPoints" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPoints.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_access_points.DataAwsS3ControlAccessPointsAccessPoints;

DataAwsS3ControlAccessPointsAccessPoints.builder()
    .build();
```


### DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration <a name="DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_access_points.DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration;

DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration.builder()
    .build();
```


### DataAwsS3ControlAccessPointsConfig <a name="DataAwsS3ControlAccessPointsConfig" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_access_points.DataAwsS3ControlAccessPointsConfig;

DataAwsS3ControlAccessPointsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .bucket(java.lang.String)
//  .dataSourceId(java.lang.String)
//  .dataSourceType(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#account_id DataAwsS3ControlAccessPoints#account_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#bucket DataAwsS3ControlAccessPoints#bucket}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#data_source_id DataAwsS3ControlAccessPoints#data_source_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.dataSourceType">dataSourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#data_source_type DataAwsS3ControlAccessPoints#data_source_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#account_id DataAwsS3ControlAccessPoints#account_id}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#bucket DataAwsS3ControlAccessPoints#bucket}.

---

##### `dataSourceId`<sup>Optional</sup> <a name="dataSourceId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#data_source_id DataAwsS3ControlAccessPoints#data_source_id}.

---

##### `dataSourceType`<sup>Optional</sup> <a name="dataSourceType" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.dataSourceType"></a>

```java
public java.lang.String getDataSourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#data_source_type DataAwsS3ControlAccessPoints#data_source_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/data-sources/s3control_access_points#region DataAwsS3ControlAccessPoints#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3ControlAccessPointsAccessPointsList <a name="DataAwsS3ControlAccessPointsAccessPointsList" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_access_points.DataAwsS3ControlAccessPointsAccessPointsList;

new DataAwsS3ControlAccessPointsAccessPointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.get"></a>

```java
public DataAwsS3ControlAccessPointsAccessPointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3ControlAccessPointsAccessPointsOutputReference <a name="DataAwsS3ControlAccessPointsAccessPointsOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_access_points.DataAwsS3ControlAccessPointsAccessPointsOutputReference;

new DataAwsS3ControlAccessPointsAccessPointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.accessPointArn">accessPointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.bucketAccountId">bucketAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.dataSourceType">dataSourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.networkOrigin">networkOrigin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList">DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPoints">DataAwsS3ControlAccessPointsAccessPoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessPointArn`<sup>Required</sup> <a name="accessPointArn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.accessPointArn"></a>

```java
public java.lang.String getAccessPointArn();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketAccountId`<sup>Required</sup> <a name="bucketAccountId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.bucketAccountId"></a>

```java
public java.lang.String getBucketAccountId();
```

- *Type:* java.lang.String

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `dataSourceType`<sup>Required</sup> <a name="dataSourceType" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.dataSourceType"></a>

```java
public java.lang.String getDataSourceType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkOrigin`<sup>Required</sup> <a name="networkOrigin" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.networkOrigin"></a>

```java
public java.lang.String getNetworkOrigin();
```

- *Type:* java.lang.String

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.vpcConfiguration"></a>

```java
public DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList getVpcConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList">DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.internalValue"></a>

```java
public DataAwsS3ControlAccessPointsAccessPoints getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPoints">DataAwsS3ControlAccessPointsAccessPoints</a>

---


### DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList <a name="DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_access_points.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList;

new DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.get"></a>

```java
public DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference <a name="DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_access_points.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference;

new DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration">DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.property.internalValue"></a>

```java
public DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration">DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration</a>

---



