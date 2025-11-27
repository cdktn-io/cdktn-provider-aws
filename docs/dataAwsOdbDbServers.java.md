# `dataAwsOdbDbServers` Submodule <a name="`dataAwsOdbDbServers` Submodule" id="@cdktf/provider-aws.dataAwsOdbDbServers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbDbServers <a name="DataAwsOdbDbServers" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_servers aws_odb_db_servers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_servers.DataAwsOdbDbServers;

DataAwsOdbDbServers.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudExadataInfrastructureId(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>java.lang.String</code> | The cloud exadata infrastructure ID. Mandatory field. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.cloudExadataInfrastructureId"></a>

- *Type:* java.lang.String

The cloud exadata infrastructure ID. Mandatory field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_servers#cloud_exadata_infrastructure_id DataAwsOdbDbServers#cloud_exadata_infrastructure_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_servers#region DataAwsOdbDbServers#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOdbDbServers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_servers.DataAwsOdbDbServers;

DataAwsOdbDbServers.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_servers.DataAwsOdbDbServers;

DataAwsOdbDbServers.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_servers.DataAwsOdbDbServers;

DataAwsOdbDbServers.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_servers.DataAwsOdbDbServers;

DataAwsOdbDbServers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsOdbDbServers.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsOdbDbServers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsOdbDbServers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsOdbDbServers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_servers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOdbDbServers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.dbServers">dbServers</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList">DataAwsOdbDbServersDbServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.cloudExadataInfrastructureIdInput">cloudExadataInfrastructureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.dbServers"></a>

```java
public DataAwsOdbDbServersDbServersList getDbServers();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList">DataAwsOdbDbServersDbServersList</a>

---

##### `cloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="cloudExadataInfrastructureIdInput" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.cloudExadataInfrastructureIdInput"></a>

```java
public java.lang.String getCloudExadataInfrastructureIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.cloudExadataInfrastructureId"></a>

```java
public java.lang.String getCloudExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbDbServersConfig <a name="DataAwsOdbDbServersConfig" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_servers.DataAwsOdbDbServersConfig;

DataAwsOdbDbServersConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudExadataInfrastructureId(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>java.lang.String</code> | The cloud exadata infrastructure ID. Mandatory field. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.cloudExadataInfrastructureId"></a>

```java
public java.lang.String getCloudExadataInfrastructureId();
```

- *Type:* java.lang.String

The cloud exadata infrastructure ID. Mandatory field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_servers#cloud_exadata_infrastructure_id DataAwsOdbDbServers#cloud_exadata_infrastructure_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/data-sources/odb_db_servers#region DataAwsOdbDbServers#region}

---

### DataAwsOdbDbServersDbServers <a name="DataAwsOdbDbServersDbServers" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_servers.DataAwsOdbDbServersDbServers;

DataAwsOdbDbServersDbServers.builder()
    .build();
```


### DataAwsOdbDbServersDbServersDbServerPatchingDetails <a name="DataAwsOdbDbServersDbServersDbServerPatchingDetails" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_servers.DataAwsOdbDbServersDbServersDbServerPatchingDetails;

DataAwsOdbDbServersDbServersDbServerPatchingDetails.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbDbServersDbServersDbServerPatchingDetailsList <a name="DataAwsOdbDbServersDbServersDbServerPatchingDetailsList" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_servers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList;

new DataAwsOdbDbServersDbServersDbServerPatchingDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.get"></a>

```java
public DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference <a name="DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_servers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference;

new DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration">estimatedPatchDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.patchingStatus">patchingStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.timePatchingEnded">timePatchingEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.timePatchingStarted">timePatchingStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetails">DataAwsOdbDbServersDbServersDbServerPatchingDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `estimatedPatchDuration`<sup>Required</sup> <a name="estimatedPatchDuration" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration"></a>

```java
public java.lang.Number getEstimatedPatchDuration();
```

- *Type:* java.lang.Number

---

##### `patchingStatus`<sup>Required</sup> <a name="patchingStatus" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.patchingStatus"></a>

```java
public java.lang.String getPatchingStatus();
```

- *Type:* java.lang.String

---

##### `timePatchingEnded`<sup>Required</sup> <a name="timePatchingEnded" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.timePatchingEnded"></a>

```java
public java.lang.String getTimePatchingEnded();
```

- *Type:* java.lang.String

---

##### `timePatchingStarted`<sup>Required</sup> <a name="timePatchingStarted" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.timePatchingStarted"></a>

```java
public java.lang.String getTimePatchingStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.internalValue"></a>

```java
public DataAwsOdbDbServersDbServersDbServerPatchingDetails getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetails">DataAwsOdbDbServersDbServersDbServerPatchingDetails</a>

---


### DataAwsOdbDbServersDbServersList <a name="DataAwsOdbDbServersDbServersList" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_servers.DataAwsOdbDbServersDbServersList;

new DataAwsOdbDbServersDbServersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.get"></a>

```java
public DataAwsOdbDbServersDbServersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOdbDbServersDbServersOutputReference <a name="DataAwsOdbDbServersDbServersOutputReference" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_servers.DataAwsOdbDbServersDbServersOutputReference;

new DataAwsOdbDbServersDbServersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.autonomousVirtualMachineIds">autonomousVirtualMachineIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.autonomousVmClusterIds">autonomousVmClusterIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.computeModel">computeModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.dbServerPatchingDetails">dbServerPatchingDetails</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList">DataAwsOdbDbServersDbServersDbServerPatchingDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.maxCpuCount">maxCpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.maxDbNodeStorageInGbs">maxDbNodeStorageInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.maxMemoryInGbs">maxMemoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.ociResourceAnchorName">ociResourceAnchorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.vmClusterIds">vmClusterIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServers">DataAwsOdbDbServersDbServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autonomousVirtualMachineIds`<sup>Required</sup> <a name="autonomousVirtualMachineIds" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.autonomousVirtualMachineIds"></a>

```java
public java.util.List<java.lang.String> getAutonomousVirtualMachineIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autonomousVmClusterIds`<sup>Required</sup> <a name="autonomousVmClusterIds" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.autonomousVmClusterIds"></a>

```java
public java.util.List<java.lang.String> getAutonomousVmClusterIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.computeModel"></a>

```java
public java.lang.String getComputeModel();
```

- *Type:* java.lang.String

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.dbNodeStorageSizeInGbs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `dbServerPatchingDetails`<sup>Required</sup> <a name="dbServerPatchingDetails" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.dbServerPatchingDetails"></a>

```java
public DataAwsOdbDbServersDbServersDbServerPatchingDetailsList getDbServerPatchingDetails();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList">DataAwsOdbDbServersDbServersDbServerPatchingDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.exadataInfrastructureId"></a>

```java
public java.lang.String getExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxCpuCount`<sup>Required</sup> <a name="maxCpuCount" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.maxCpuCount"></a>

```java
public java.lang.Number getMaxCpuCount();
```

- *Type:* java.lang.Number

---

##### `maxDbNodeStorageInGbs`<sup>Required</sup> <a name="maxDbNodeStorageInGbs" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.maxDbNodeStorageInGbs"></a>

```java
public java.lang.Number getMaxDbNodeStorageInGbs();
```

- *Type:* java.lang.Number

---

##### `maxMemoryInGbs`<sup>Required</sup> <a name="maxMemoryInGbs" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.maxMemoryInGbs"></a>

```java
public java.lang.Number getMaxMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.memorySizeInGbs"></a>

```java
public java.lang.Number getMemorySizeInGbs();
```

- *Type:* java.lang.Number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ociResourceAnchorName`<sup>Required</sup> <a name="ociResourceAnchorName" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.ociResourceAnchorName"></a>

```java
public java.lang.String getOciResourceAnchorName();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `vmClusterIds`<sup>Required</sup> <a name="vmClusterIds" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.vmClusterIds"></a>

```java
public java.util.List<java.lang.String> getVmClusterIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.internalValue"></a>

```java
public DataAwsOdbDbServersDbServers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServers">DataAwsOdbDbServersDbServers</a>

---



