# `dataAwsDevopsguruResourceCollection` Submodule <a name="`dataAwsDevopsguruResourceCollection` Submodule" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsDevopsguruResourceCollection <a name="DataAwsDevopsguruResourceCollection" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/devopsguru_resource_collection aws_devopsguru_resource_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_devopsguru_resource_collection.DataAwsDevopsguruResourceCollection;

DataAwsDevopsguruResourceCollection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .type(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/devopsguru_resource_collection#type DataAwsDevopsguruResourceCollection#type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/devopsguru_resource_collection#type DataAwsDevopsguruResourceCollection#type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/devopsguru_resource_collection#region DataAwsDevopsguruResourceCollection#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsDevopsguruResourceCollection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_devopsguru_resource_collection.DataAwsDevopsguruResourceCollection;

DataAwsDevopsguruResourceCollection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_devopsguru_resource_collection.DataAwsDevopsguruResourceCollection;

DataAwsDevopsguruResourceCollection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_devopsguru_resource_collection.DataAwsDevopsguruResourceCollection;

DataAwsDevopsguruResourceCollection.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_devopsguru_resource_collection.DataAwsDevopsguruResourceCollection;

DataAwsDevopsguruResourceCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsDevopsguruResourceCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsDevopsguruResourceCollection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsDevopsguruResourceCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsDevopsguruResourceCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/devopsguru_resource_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsDevopsguruResourceCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.cloudformation">cloudformation</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList">DataAwsDevopsguruResourceCollectionCloudformationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList">DataAwsDevopsguruResourceCollectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `cloudformation`<sup>Required</sup> <a name="cloudformation" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.cloudformation"></a>

```java
public DataAwsDevopsguruResourceCollectionCloudformationList getCloudformation();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList">DataAwsDevopsguruResourceCollectionCloudformationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.tags"></a>

```java
public DataAwsDevopsguruResourceCollectionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList">DataAwsDevopsguruResourceCollectionTagsList</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsDevopsguruResourceCollectionCloudformation <a name="DataAwsDevopsguruResourceCollectionCloudformation" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_devopsguru_resource_collection.DataAwsDevopsguruResourceCollectionCloudformation;

DataAwsDevopsguruResourceCollectionCloudformation.builder()
    .build();
```


### DataAwsDevopsguruResourceCollectionConfig <a name="DataAwsDevopsguruResourceCollectionConfig" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_devopsguru_resource_collection.DataAwsDevopsguruResourceCollectionConfig;

DataAwsDevopsguruResourceCollectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .type(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/devopsguru_resource_collection#type DataAwsDevopsguruResourceCollection#type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/devopsguru_resource_collection#type DataAwsDevopsguruResourceCollection#type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/devopsguru_resource_collection#region DataAwsDevopsguruResourceCollection#region}

---

### DataAwsDevopsguruResourceCollectionTags <a name="DataAwsDevopsguruResourceCollectionTags" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_devopsguru_resource_collection.DataAwsDevopsguruResourceCollectionTags;

DataAwsDevopsguruResourceCollectionTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsDevopsguruResourceCollectionCloudformationList <a name="DataAwsDevopsguruResourceCollectionCloudformationList" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_devopsguru_resource_collection.DataAwsDevopsguruResourceCollectionCloudformationList;

new DataAwsDevopsguruResourceCollectionCloudformationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.get"></a>

```java
public DataAwsDevopsguruResourceCollectionCloudformationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsDevopsguruResourceCollectionCloudformationOutputReference <a name="DataAwsDevopsguruResourceCollectionCloudformationOutputReference" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_devopsguru_resource_collection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference;

new DataAwsDevopsguruResourceCollectionCloudformationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.stackNames">stackNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation">DataAwsDevopsguruResourceCollectionCloudformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stackNames`<sup>Required</sup> <a name="stackNames" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.stackNames"></a>

```java
public java.util.List<java.lang.String> getStackNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformationOutputReference.property.internalValue"></a>

```java
public DataAwsDevopsguruResourceCollectionCloudformation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionCloudformation">DataAwsDevopsguruResourceCollectionCloudformation</a>

---


### DataAwsDevopsguruResourceCollectionTagsList <a name="DataAwsDevopsguruResourceCollectionTagsList" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_devopsguru_resource_collection.DataAwsDevopsguruResourceCollectionTagsList;

new DataAwsDevopsguruResourceCollectionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.get"></a>

```java
public DataAwsDevopsguruResourceCollectionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsDevopsguruResourceCollectionTagsOutputReference <a name="DataAwsDevopsguruResourceCollectionTagsOutputReference" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_devopsguru_resource_collection.DataAwsDevopsguruResourceCollectionTagsOutputReference;

new DataAwsDevopsguruResourceCollectionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.appBoundaryKey">appBoundaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.tagValues">tagValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags">DataAwsDevopsguruResourceCollectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appBoundaryKey`<sup>Required</sup> <a name="appBoundaryKey" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.appBoundaryKey"></a>

```java
public java.lang.String getAppBoundaryKey();
```

- *Type:* java.lang.String

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.tagValues"></a>

```java
public java.util.List<java.lang.String> getTagValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTagsOutputReference.property.internalValue"></a>

```java
public DataAwsDevopsguruResourceCollectionTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsDevopsguruResourceCollection.DataAwsDevopsguruResourceCollectionTags">DataAwsDevopsguruResourceCollectionTags</a>

---



