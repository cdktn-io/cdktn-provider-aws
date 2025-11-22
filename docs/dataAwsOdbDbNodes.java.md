# `dataAwsOdbDbNodes` Submodule <a name="`dataAwsOdbDbNodes` Submodule" id="@cdktf/provider-aws.dataAwsOdbDbNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbDbNodes <a name="DataAwsOdbDbNodes" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/data-sources/odb_db_nodes aws_odb_db_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_nodes.DataAwsOdbDbNodes;

DataAwsOdbDbNodes.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudVmClusterId(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.cloudVmClusterId">cloudVmClusterId</a></code> | <code>java.lang.String</code> | Id of the cloud VM cluster. The unique identifier of the VM cluster. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.cloudVmClusterId"></a>

- *Type:* java.lang.String

Id of the cloud VM cluster. The unique identifier of the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/data-sources/odb_db_nodes#cloud_vm_cluster_id DataAwsOdbDbNodes#cloud_vm_cluster_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/data-sources/odb_db_nodes#region DataAwsOdbDbNodes#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOdbDbNodes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_nodes.DataAwsOdbDbNodes;

DataAwsOdbDbNodes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_nodes.DataAwsOdbDbNodes;

DataAwsOdbDbNodes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_nodes.DataAwsOdbDbNodes;

DataAwsOdbDbNodes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_nodes.DataAwsOdbDbNodes;

DataAwsOdbDbNodes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsOdbDbNodes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataAwsOdbDbNodes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsOdbDbNodes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsOdbDbNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/data-sources/odb_db_nodes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOdbDbNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.dbNodes">dbNodes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList">DataAwsOdbDbNodesDbNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.cloudVmClusterIdInput">cloudVmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dbNodes`<sup>Required</sup> <a name="dbNodes" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.dbNodes"></a>

```java
public DataAwsOdbDbNodesDbNodesList getDbNodes();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList">DataAwsOdbDbNodesDbNodesList</a>

---

##### `cloudVmClusterIdInput`<sup>Optional</sup> <a name="cloudVmClusterIdInput" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.cloudVmClusterIdInput"></a>

```java
public java.lang.String getCloudVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.cloudVmClusterId"></a>

```java
public java.lang.String getCloudVmClusterId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbDbNodesConfig <a name="DataAwsOdbDbNodesConfig" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_nodes.DataAwsOdbDbNodesConfig;

DataAwsOdbDbNodesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cloudVmClusterId(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>java.lang.String</code> | Id of the cloud VM cluster. The unique identifier of the VM cluster. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.cloudVmClusterId"></a>

```java
public java.lang.String getCloudVmClusterId();
```

- *Type:* java.lang.String

Id of the cloud VM cluster. The unique identifier of the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/data-sources/odb_db_nodes#cloud_vm_cluster_id DataAwsOdbDbNodes#cloud_vm_cluster_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.22.1/docs/data-sources/odb_db_nodes#region DataAwsOdbDbNodes#region}

---

### DataAwsOdbDbNodesDbNodes <a name="DataAwsOdbDbNodesDbNodes" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_nodes.DataAwsOdbDbNodesDbNodes;

DataAwsOdbDbNodesDbNodes.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbDbNodesDbNodesList <a name="DataAwsOdbDbNodesDbNodesList" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_nodes.DataAwsOdbDbNodesDbNodesList;

new DataAwsOdbDbNodesDbNodesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.get"></a>

```java
public DataAwsOdbDbNodesDbNodesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOdbDbNodesDbNodesOutputReference <a name="DataAwsOdbDbNodesDbNodesOutputReference" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_odb_db_nodes.DataAwsOdbDbNodesDbNodesOutputReference;

new DataAwsOdbDbNodesDbNodesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.backupIpId">backupIpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.backupVnic2Id">backupVnic2Id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.backupVnicId">backupVnicId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.dbNodeStorageSize">dbNodeStorageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.dbServerId">dbServerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.hostIpId">hostIpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.maintenanceType">maintenanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.memorySize">memorySize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.ociResourceAnchorName">ociResourceAnchorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.softwareStorageSize">softwareStorageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.timeMaintenanceWindowEnd">timeMaintenanceWindowEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.timeMaintenanceWindowStart">timeMaintenanceWindowStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.totalCpuCoreCount">totalCpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.vnic2Id">vnic2Id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.vnicId">vnicId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodes">DataAwsOdbDbNodesDbNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.additionalDetails"></a>

```java
public java.lang.String getAdditionalDetails();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `backupIpId`<sup>Required</sup> <a name="backupIpId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.backupIpId"></a>

```java
public java.lang.String getBackupIpId();
```

- *Type:* java.lang.String

---

##### `backupVnic2Id`<sup>Required</sup> <a name="backupVnic2Id" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.backupVnic2Id"></a>

```java
public java.lang.String getBackupVnic2Id();
```

- *Type:* java.lang.String

---

##### `backupVnicId`<sup>Required</sup> <a name="backupVnicId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.backupVnicId"></a>

```java
public java.lang.String getBackupVnicId();
```

- *Type:* java.lang.String

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `dbNodeStorageSize`<sup>Required</sup> <a name="dbNodeStorageSize" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.dbNodeStorageSize"></a>

```java
public java.lang.Number getDbNodeStorageSize();
```

- *Type:* java.lang.Number

---

##### `dbServerId`<sup>Required</sup> <a name="dbServerId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.dbServerId"></a>

```java
public java.lang.String getDbServerId();
```

- *Type:* java.lang.String

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

---

##### `hostIpId`<sup>Required</sup> <a name="hostIpId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.hostIpId"></a>

```java
public java.lang.String getHostIpId();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maintenanceType`<sup>Required</sup> <a name="maintenanceType" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.maintenanceType"></a>

```java
public java.lang.String getMaintenanceType();
```

- *Type:* java.lang.String

---

##### `memorySize`<sup>Required</sup> <a name="memorySize" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.memorySize"></a>

```java
public java.lang.Number getMemorySize();
```

- *Type:* java.lang.Number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ociResourceAnchorName`<sup>Required</sup> <a name="ociResourceAnchorName" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.ociResourceAnchorName"></a>

```java
public java.lang.String getOciResourceAnchorName();
```

- *Type:* java.lang.String

---

##### `softwareStorageSize`<sup>Required</sup> <a name="softwareStorageSize" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.softwareStorageSize"></a>

```java
public java.lang.Number getSoftwareStorageSize();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `timeMaintenanceWindowEnd`<sup>Required</sup> <a name="timeMaintenanceWindowEnd" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.timeMaintenanceWindowEnd"></a>

```java
public java.lang.String getTimeMaintenanceWindowEnd();
```

- *Type:* java.lang.String

---

##### `timeMaintenanceWindowStart`<sup>Required</sup> <a name="timeMaintenanceWindowStart" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.timeMaintenanceWindowStart"></a>

```java
public java.lang.String getTimeMaintenanceWindowStart();
```

- *Type:* java.lang.String

---

##### `totalCpuCoreCount`<sup>Required</sup> <a name="totalCpuCoreCount" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.totalCpuCoreCount"></a>

```java
public java.lang.Number getTotalCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `vnic2Id`<sup>Required</sup> <a name="vnic2Id" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.vnic2Id"></a>

```java
public java.lang.String getVnic2Id();
```

- *Type:* java.lang.String

---

##### `vnicId`<sup>Required</sup> <a name="vnicId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.vnicId"></a>

```java
public java.lang.String getVnicId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.internalValue"></a>

```java
public DataAwsOdbDbNodesDbNodes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodes">DataAwsOdbDbNodesDbNodes</a>

---



