# `dataAwsS3FilesFileSystems` Submodule <a name="`dataAwsS3FilesFileSystems` Submodule" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3FilesFileSystems <a name="DataAwsS3FilesFileSystems" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/s3files_file_systems aws_s3files_file_systems}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_file_systems.DataAwsS3FilesFileSystems;

DataAwsS3FilesFileSystems.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .fileSystems(IResolvable|java.util.List<DataAwsS3FilesFileSystemsFileSystems>)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.fileSystems">fileSystems</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a>></code> | file_systems block. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fileSystems`<sup>Optional</sup> <a name="fileSystems" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.fileSystems"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a>>

file_systems block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/s3files_file_systems#file_systems DataAwsS3FilesFileSystems#file_systems}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/s3files_file_systems#region DataAwsS3FilesFileSystems#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.putFileSystems">putFileSystems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.resetFileSystems">resetFileSystems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFileSystems` <a name="putFileSystems" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.putFileSystems"></a>

```java
public void putFileSystems(IResolvable|java.util.List<DataAwsS3FilesFileSystemsFileSystems> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.putFileSystems.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a>>

---

##### `resetFileSystems` <a name="resetFileSystems" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.resetFileSystems"></a>

```java
public void resetFileSystems()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsS3FilesFileSystems resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_file_systems.DataAwsS3FilesFileSystems;

DataAwsS3FilesFileSystems.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_file_systems.DataAwsS3FilesFileSystems;

DataAwsS3FilesFileSystems.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_file_systems.DataAwsS3FilesFileSystems;

DataAwsS3FilesFileSystems.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_file_systems.DataAwsS3FilesFileSystems;

DataAwsS3FilesFileSystems.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsS3FilesFileSystems.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsS3FilesFileSystems resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsS3FilesFileSystems to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsS3FilesFileSystems that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/s3files_file_systems#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsS3FilesFileSystems to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.fileSystems">fileSystems</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList">DataAwsS3FilesFileSystemsFileSystemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.fileSystemsInput">fileSystemsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `fileSystems`<sup>Required</sup> <a name="fileSystems" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.fileSystems"></a>

```java
public DataAwsS3FilesFileSystemsFileSystemsList getFileSystems();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList">DataAwsS3FilesFileSystemsFileSystemsList</a>

---

##### `fileSystemsInput`<sup>Optional</sup> <a name="fileSystemsInput" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.fileSystemsInput"></a>

```java
public IResolvable|java.util.List<DataAwsS3FilesFileSystemsFileSystems> getFileSystemsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3FilesFileSystemsConfig <a name="DataAwsS3FilesFileSystemsConfig" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_file_systems.DataAwsS3FilesFileSystemsConfig;

DataAwsS3FilesFileSystemsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .fileSystems(IResolvable|java.util.List<DataAwsS3FilesFileSystemsFileSystems>)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.fileSystems">fileSystems</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a>></code> | file_systems block. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fileSystems`<sup>Optional</sup> <a name="fileSystems" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.fileSystems"></a>

```java
public IResolvable|java.util.List<DataAwsS3FilesFileSystemsFileSystems> getFileSystems();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a>>

file_systems block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/s3files_file_systems#file_systems DataAwsS3FilesFileSystems#file_systems}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/s3files_file_systems#region DataAwsS3FilesFileSystems#region}

---

### DataAwsS3FilesFileSystemsFileSystems <a name="DataAwsS3FilesFileSystemsFileSystems" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_file_systems.DataAwsS3FilesFileSystemsFileSystems;

DataAwsS3FilesFileSystemsFileSystems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3FilesFileSystemsFileSystemsList <a name="DataAwsS3FilesFileSystemsFileSystemsList" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_file_systems.DataAwsS3FilesFileSystemsFileSystemsList;

new DataAwsS3FilesFileSystemsFileSystemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.get"></a>

```java
public DataAwsS3FilesFileSystemsFileSystemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsS3FilesFileSystemsFileSystems> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a>>

---


### DataAwsS3FilesFileSystemsFileSystemsOutputReference <a name="DataAwsS3FilesFileSystemsFileSystemsOutputReference" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_files_file_systems.DataAwsS3FilesFileSystemsFileSystemsOutputReference;

new DataAwsS3FilesFileSystemsFileSystemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsS3FilesFileSystemsFileSystems getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a>

---



