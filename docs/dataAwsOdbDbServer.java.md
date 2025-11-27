# `dataAwsOdbDbServer` Submodule <a name="`dataAwsOdbDbServer` Submodule" id="@cdktf/provider-aws.dataAwsOdbDbServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbDbServer <a name="DataAwsOdbDbServer" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_server aws_odb_db_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_server.DataAwsOdbDbServer;

DataAwsOdbDbServer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudExadataInfrastructureId(java.lang.String)
    .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>java.lang.String</code> | The identifier of the database server to retrieve information about. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The identifier of the the database server. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.cloudExadataInfrastructureId"></a>

- *Type:* java.lang.String

The identifier of the database server to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_server#cloud_exadata_infrastructure_id DataAwsOdbDbServer#cloud_exadata_infrastructure_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The identifier of the the database server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_server#id DataAwsOdbDbServer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_server#region DataAwsOdbDbServer#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOdbDbServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_server.DataAwsOdbDbServer;

DataAwsOdbDbServer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_server.DataAwsOdbDbServer;

DataAwsOdbDbServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_server.DataAwsOdbDbServer;

DataAwsOdbDbServer.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_server.DataAwsOdbDbServer;

DataAwsOdbDbServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsOdbDbServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsOdbDbServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsOdbDbServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsOdbDbServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOdbDbServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.autonomousVirtualMachineIds">autonomousVirtualMachineIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.autonomousVmClusterIds">autonomousVmClusterIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.computeModel">computeModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.dbServerPatchingDetails">dbServerPatchingDetails</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList">DataAwsOdbDbServerDbServerPatchingDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.maxCpuCount">maxCpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.maxDbNodeStorageInGbs">maxDbNodeStorageInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.maxMemoryInGbs">maxMemoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.ociResourceAnchorName">ociResourceAnchorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.vmClusterIds">vmClusterIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cloudExadataInfrastructureIdInput">cloudExadataInfrastructureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `autonomousVirtualMachineIds`<sup>Required</sup> <a name="autonomousVirtualMachineIds" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.autonomousVirtualMachineIds"></a>

```java
public java.util.List<java.lang.String> getAutonomousVirtualMachineIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autonomousVmClusterIds`<sup>Required</sup> <a name="autonomousVmClusterIds" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.autonomousVmClusterIds"></a>

```java
public java.util.List<java.lang.String> getAutonomousVmClusterIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.computeModel"></a>

```java
public java.lang.String getComputeModel();
```

- *Type:* java.lang.String

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.dbNodeStorageSizeInGbs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `dbServerPatchingDetails`<sup>Required</sup> <a name="dbServerPatchingDetails" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.dbServerPatchingDetails"></a>

```java
public DataAwsOdbDbServerDbServerPatchingDetailsList getDbServerPatchingDetails();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList">DataAwsOdbDbServerDbServerPatchingDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.exadataInfrastructureId"></a>

```java
public java.lang.String getExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `maxCpuCount`<sup>Required</sup> <a name="maxCpuCount" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.maxCpuCount"></a>

```java
public java.lang.Number getMaxCpuCount();
```

- *Type:* java.lang.Number

---

##### `maxDbNodeStorageInGbs`<sup>Required</sup> <a name="maxDbNodeStorageInGbs" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.maxDbNodeStorageInGbs"></a>

```java
public java.lang.Number getMaxDbNodeStorageInGbs();
```

- *Type:* java.lang.Number

---

##### `maxMemoryInGbs`<sup>Required</sup> <a name="maxMemoryInGbs" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.maxMemoryInGbs"></a>

```java
public java.lang.Number getMaxMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.memorySizeInGbs"></a>

```java
public java.lang.Number getMemorySizeInGbs();
```

- *Type:* java.lang.Number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ociResourceAnchorName`<sup>Required</sup> <a name="ociResourceAnchorName" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.ociResourceAnchorName"></a>

```java
public java.lang.String getOciResourceAnchorName();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `vmClusterIds`<sup>Required</sup> <a name="vmClusterIds" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.vmClusterIds"></a>

```java
public java.util.List<java.lang.String> getVmClusterIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `cloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="cloudExadataInfrastructureIdInput" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cloudExadataInfrastructureIdInput"></a>

```java
public java.lang.String getCloudExadataInfrastructureIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.cloudExadataInfrastructureId"></a>

```java
public java.lang.String getCloudExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbDbServerConfig <a name="DataAwsOdbDbServerConfig" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_server.DataAwsOdbDbServerConfig;

DataAwsOdbDbServerConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudExadataInfrastructureId(java.lang.String)
    .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>java.lang.String</code> | The identifier of the database server to retrieve information about. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | The identifier of the the database server. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.cloudExadataInfrastructureId"></a>

```java
public java.lang.String getCloudExadataInfrastructureId();
```

- *Type:* java.lang.String

The identifier of the database server to retrieve information about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_server#cloud_exadata_infrastructure_id DataAwsOdbDbServer#cloud_exadata_infrastructure_id}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The identifier of the the database server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_server#id DataAwsOdbDbServer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_server#region DataAwsOdbDbServer#region}

---

### DataAwsOdbDbServerDbServerPatchingDetails <a name="DataAwsOdbDbServerDbServerPatchingDetails" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_server.DataAwsOdbDbServerDbServerPatchingDetails;

DataAwsOdbDbServerDbServerPatchingDetails.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbDbServerDbServerPatchingDetailsList <a name="DataAwsOdbDbServerDbServerPatchingDetailsList" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_server.DataAwsOdbDbServerDbServerPatchingDetailsList;

new DataAwsOdbDbServerDbServerPatchingDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.get"></a>

```java
public DataAwsOdbDbServerDbServerPatchingDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOdbDbServerDbServerPatchingDetailsOutputReference <a name="DataAwsOdbDbServerDbServerPatchingDetailsOutputReference" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_server.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference;

new DataAwsOdbDbServerDbServerPatchingDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration">estimatedPatchDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.patchingStatus">patchingStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.timePatchingEnded">timePatchingEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.timePatchingStarted">timePatchingStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetails">DataAwsOdbDbServerDbServerPatchingDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `estimatedPatchDuration`<sup>Required</sup> <a name="estimatedPatchDuration" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration"></a>

```java
public java.lang.Number getEstimatedPatchDuration();
```

- *Type:* java.lang.Number

---

##### `patchingStatus`<sup>Required</sup> <a name="patchingStatus" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.patchingStatus"></a>

```java
public java.lang.String getPatchingStatus();
```

- *Type:* java.lang.String

---

##### `timePatchingEnded`<sup>Required</sup> <a name="timePatchingEnded" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.timePatchingEnded"></a>

```java
public java.lang.String getTimePatchingEnded();
```

- *Type:* java.lang.String

---

##### `timePatchingStarted`<sup>Required</sup> <a name="timePatchingStarted" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.timePatchingStarted"></a>

```java
public java.lang.String getTimePatchingStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetailsOutputReference.property.internalValue"></a>

```java
public DataAwsOdbDbServerDbServerPatchingDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbServer.DataAwsOdbDbServerDbServerPatchingDetails">DataAwsOdbDbServerDbServerPatchingDetails</a>

---



