# `dataAwsS3FilesAccessPoint` Submodule <a name="`dataAwsS3FilesAccessPoint` Submodule" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3FilesAccessPoint <a name="DataAwsS3FilesAccessPoint" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3files_access_point aws_s3files_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_access_point.DataAwsS3FilesAccessPoint;

DataAwsS3FilesAccessPoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
//  .posixUser(IResolvable|java.util.List<DataAwsS3FilesAccessPointPosixUser>)
//  .region(java.lang.String)
//  .rootDirectory(IResolvable|java.util.List<DataAwsS3FilesAccessPointRootDirectory>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Access point ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.posixUser">posixUser</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a>></code> | posix_user block. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.rootDirectory">rootDirectory</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a>></code> | root_directory block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Access point ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3files_access_point#id DataAwsS3FilesAccessPoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `posixUser`<sup>Optional</sup> <a name="posixUser" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.posixUser"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a>>

posix_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3files_access_point#posix_user DataAwsS3FilesAccessPoint#posix_user}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3files_access_point#region DataAwsS3FilesAccessPoint#region}

---

##### `rootDirectory`<sup>Optional</sup> <a name="rootDirectory" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.Initializer.parameter.rootDirectory"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a>>

root_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3files_access_point#root_directory DataAwsS3FilesAccessPoint#root_directory}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.putPosixUser">putPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.putRootDirectory">putRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetPosixUser">resetPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetRootDirectory">resetRootDirectory</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPosixUser` <a name="putPosixUser" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.putPosixUser"></a>

```java
public void putPosixUser(IResolvable|java.util.List<DataAwsS3FilesAccessPointPosixUser> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.putPosixUser.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a>>

---

##### `putRootDirectory` <a name="putRootDirectory" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.putRootDirectory"></a>

```java
public void putRootDirectory(IResolvable|java.util.List<DataAwsS3FilesAccessPointRootDirectory> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.putRootDirectory.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a>>

---

##### `resetPosixUser` <a name="resetPosixUser" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetPosixUser"></a>

```java
public void resetPosixUser()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRootDirectory` <a name="resetRootDirectory" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.resetRootDirectory"></a>

```java
public void resetRootDirectory()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsS3FilesAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_access_point.DataAwsS3FilesAccessPoint;

DataAwsS3FilesAccessPoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_access_point.DataAwsS3FilesAccessPoint;

DataAwsS3FilesAccessPoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_access_point.DataAwsS3FilesAccessPoint;

DataAwsS3FilesAccessPoint.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_access_point.DataAwsS3FilesAccessPoint;

DataAwsS3FilesAccessPoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsS3FilesAccessPoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsS3FilesAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsS3FilesAccessPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsS3FilesAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3files_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsS3FilesAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.fileSystemId">fileSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.posixUser">posixUser</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList">DataAwsS3FilesAccessPointPosixUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.rootDirectory">rootDirectory</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList">DataAwsS3FilesAccessPointRootDirectoryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.posixUserInput">posixUserInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.rootDirectoryInput">rootDirectoryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.fileSystemId"></a>

```java
public java.lang.String getFileSystemId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `posixUser`<sup>Required</sup> <a name="posixUser" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.posixUser"></a>

```java
public DataAwsS3FilesAccessPointPosixUserList getPosixUser();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList">DataAwsS3FilesAccessPointPosixUserList</a>

---

##### `rootDirectory`<sup>Required</sup> <a name="rootDirectory" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.rootDirectory"></a>

```java
public DataAwsS3FilesAccessPointRootDirectoryList getRootDirectory();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList">DataAwsS3FilesAccessPointRootDirectoryList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `posixUserInput`<sup>Optional</sup> <a name="posixUserInput" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.posixUserInput"></a>

```java
public IResolvable|java.util.List<DataAwsS3FilesAccessPointPosixUser> getPosixUserInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `rootDirectoryInput`<sup>Optional</sup> <a name="rootDirectoryInput" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.rootDirectoryInput"></a>

```java
public IResolvable|java.util.List<DataAwsS3FilesAccessPointRootDirectory> getRootDirectoryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3FilesAccessPointConfig <a name="DataAwsS3FilesAccessPointConfig" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_access_point.DataAwsS3FilesAccessPointConfig;

DataAwsS3FilesAccessPointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .id(java.lang.String)
//  .posixUser(IResolvable|java.util.List<DataAwsS3FilesAccessPointPosixUser>)
//  .region(java.lang.String)
//  .rootDirectory(IResolvable|java.util.List<DataAwsS3FilesAccessPointRootDirectory>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Access point ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.posixUser">posixUser</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a>></code> | posix_user block. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.rootDirectory">rootDirectory</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a>></code> | root_directory block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Access point ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3files_access_point#id DataAwsS3FilesAccessPoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `posixUser`<sup>Optional</sup> <a name="posixUser" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.posixUser"></a>

```java
public IResolvable|java.util.List<DataAwsS3FilesAccessPointPosixUser> getPosixUser();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a>>

posix_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3files_access_point#posix_user DataAwsS3FilesAccessPoint#posix_user}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3files_access_point#region DataAwsS3FilesAccessPoint#region}

---

##### `rootDirectory`<sup>Optional</sup> <a name="rootDirectory" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointConfig.property.rootDirectory"></a>

```java
public IResolvable|java.util.List<DataAwsS3FilesAccessPointRootDirectory> getRootDirectory();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a>>

root_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3files_access_point#root_directory DataAwsS3FilesAccessPoint#root_directory}

---

### DataAwsS3FilesAccessPointPosixUser <a name="DataAwsS3FilesAccessPointPosixUser" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_access_point.DataAwsS3FilesAccessPointPosixUser;

DataAwsS3FilesAccessPointPosixUser.builder()
    .build();
```


### DataAwsS3FilesAccessPointRootDirectory <a name="DataAwsS3FilesAccessPointRootDirectory" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_access_point.DataAwsS3FilesAccessPointRootDirectory;

DataAwsS3FilesAccessPointRootDirectory.builder()
//  .creationPermissions(IResolvable|java.util.List<DataAwsS3FilesAccessPointRootDirectoryCreationPermissions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory.property.creationPermissions">creationPermissions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsS3FilesAccessPointRootDirectoryCreationPermissions</a>></code> | creation_permissions block. |

---

##### `creationPermissions`<sup>Optional</sup> <a name="creationPermissions" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory.property.creationPermissions"></a>

```java
public IResolvable|java.util.List<DataAwsS3FilesAccessPointRootDirectoryCreationPermissions> getCreationPermissions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsS3FilesAccessPointRootDirectoryCreationPermissions</a>>

creation_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/s3files_access_point#creation_permissions DataAwsS3FilesAccessPoint#creation_permissions}

---

### DataAwsS3FilesAccessPointRootDirectoryCreationPermissions <a name="DataAwsS3FilesAccessPointRootDirectoryCreationPermissions" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_access_point.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions;

DataAwsS3FilesAccessPointRootDirectoryCreationPermissions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3FilesAccessPointPosixUserList <a name="DataAwsS3FilesAccessPointPosixUserList" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_access_point.DataAwsS3FilesAccessPointPosixUserList;

new DataAwsS3FilesAccessPointPosixUserList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.get"></a>

```java
public DataAwsS3FilesAccessPointPosixUserOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsS3FilesAccessPointPosixUser> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a>>

---


### DataAwsS3FilesAccessPointPosixUserOutputReference <a name="DataAwsS3FilesAccessPointPosixUserOutputReference" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_access_point.DataAwsS3FilesAccessPointPosixUserOutputReference;

new DataAwsS3FilesAccessPointPosixUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.gid">gid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.secondaryGids">secondaryGids</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.uid">uid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.gid"></a>

```java
public java.lang.Number getGid();
```

- *Type:* java.lang.Number

---

##### `secondaryGids`<sup>Required</sup> <a name="secondaryGids" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.secondaryGids"></a>

```java
public java.util.List<java.lang.Number> getSecondaryGids();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.uid"></a>

```java
public java.lang.Number getUid();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUserOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsS3FilesAccessPointPosixUser getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointPosixUser">DataAwsS3FilesAccessPointPosixUser</a>

---


### DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList <a name="DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_access_point.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList;

new DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.get"></a>

```java
public DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsS3FilesAccessPointRootDirectoryCreationPermissions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsS3FilesAccessPointRootDirectoryCreationPermissions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsS3FilesAccessPointRootDirectoryCreationPermissions</a>>

---


### DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference <a name="DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_access_point.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference;

new DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGid">ownerGid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUid">ownerUid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissions">permissions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsS3FilesAccessPointRootDirectoryCreationPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ownerGid`<sup>Required</sup> <a name="ownerGid" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGid"></a>

```java
public java.lang.Number getOwnerGid();
```

- *Type:* java.lang.Number

---

##### `ownerUid`<sup>Required</sup> <a name="ownerUid" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUid"></a>

```java
public java.lang.Number getOwnerUid();
```

- *Type:* java.lang.Number

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissions"></a>

```java
public java.lang.String getPermissions();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsS3FilesAccessPointRootDirectoryCreationPermissions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsS3FilesAccessPointRootDirectoryCreationPermissions</a>

---


### DataAwsS3FilesAccessPointRootDirectoryList <a name="DataAwsS3FilesAccessPointRootDirectoryList" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_access_point.DataAwsS3FilesAccessPointRootDirectoryList;

new DataAwsS3FilesAccessPointRootDirectoryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.get"></a>

```java
public DataAwsS3FilesAccessPointRootDirectoryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsS3FilesAccessPointRootDirectory> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a>>

---


### DataAwsS3FilesAccessPointRootDirectoryOutputReference <a name="DataAwsS3FilesAccessPointRootDirectoryOutputReference" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_access_point.DataAwsS3FilesAccessPointRootDirectoryOutputReference;

new DataAwsS3FilesAccessPointRootDirectoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions">putCreationPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.resetCreationPermissions">resetCreationPermissions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCreationPermissions` <a name="putCreationPermissions" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions"></a>

```java
public void putCreationPermissions(IResolvable|java.util.List<DataAwsS3FilesAccessPointRootDirectoryCreationPermissions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsS3FilesAccessPointRootDirectoryCreationPermissions</a>>

---

##### `resetCreationPermissions` <a name="resetCreationPermissions" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.resetCreationPermissions"></a>

```java
public void resetCreationPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.creationPermissions">creationPermissions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList">DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.creationPermissionsInput">creationPermissionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsS3FilesAccessPointRootDirectoryCreationPermissions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `creationPermissions`<sup>Required</sup> <a name="creationPermissions" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.creationPermissions"></a>

```java
public DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList getCreationPermissions();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList">DataAwsS3FilesAccessPointRootDirectoryCreationPermissionsList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `creationPermissionsInput`<sup>Optional</sup> <a name="creationPermissionsInput" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.creationPermissionsInput"></a>

```java
public IResolvable|java.util.List<DataAwsS3FilesAccessPointRootDirectoryCreationPermissions> getCreationPermissionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryCreationPermissions">DataAwsS3FilesAccessPointRootDirectoryCreationPermissions</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectoryOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsS3FilesAccessPointRootDirectory getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesAccessPoint.DataAwsS3FilesAccessPointRootDirectory">DataAwsS3FilesAccessPointRootDirectory</a>

---



