# `dataAwsElasticacheServiceUpdates` Submodule <a name="`dataAwsElasticacheServiceUpdates` Submodule" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticacheServiceUpdates <a name="DataAwsElasticacheServiceUpdates" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/elasticache_service_updates aws_elasticache_service_updates}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_elasticache_service_updates.DataAwsElasticacheServiceUpdates;

DataAwsElasticacheServiceUpdates.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .region(java.lang.String)
//  .status(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.status">status</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/elasticache_service_updates#status DataAwsElasticacheServiceUpdates#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/elasticache_service_updates#region DataAwsElasticacheServiceUpdates#region}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.status"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/elasticache_service_updates#status DataAwsElasticacheServiceUpdates#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsElasticacheServiceUpdates resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_elasticache_service_updates.DataAwsElasticacheServiceUpdates;

DataAwsElasticacheServiceUpdates.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_elasticache_service_updates.DataAwsElasticacheServiceUpdates;

DataAwsElasticacheServiceUpdates.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_elasticache_service_updates.DataAwsElasticacheServiceUpdates;

DataAwsElasticacheServiceUpdates.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_elasticache_service_updates.DataAwsElasticacheServiceUpdates;

DataAwsElasticacheServiceUpdates.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsElasticacheServiceUpdates.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsElasticacheServiceUpdates resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsElasticacheServiceUpdates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsElasticacheServiceUpdates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/elasticache_service_updates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsElasticacheServiceUpdates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.serviceUpdates">serviceUpdates</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList">DataAwsElasticacheServiceUpdatesServiceUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.statusInput">statusInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.status">status</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `serviceUpdates`<sup>Required</sup> <a name="serviceUpdates" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.serviceUpdates"></a>

```java
public DataAwsElasticacheServiceUpdatesServiceUpdatesList getServiceUpdates();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList">DataAwsElasticacheServiceUpdatesServiceUpdatesList</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.statusInput"></a>

```java
public java.util.List<java.lang.String> getStatusInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.status"></a>

```java
public java.util.List<java.lang.String> getStatus();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticacheServiceUpdatesConfig <a name="DataAwsElasticacheServiceUpdatesConfig" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_elasticache_service_updates.DataAwsElasticacheServiceUpdatesConfig;

DataAwsElasticacheServiceUpdatesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .region(java.lang.String)
//  .status(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.status">status</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/elasticache_service_updates#status DataAwsElasticacheServiceUpdates#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/elasticache_service_updates#region DataAwsElasticacheServiceUpdates#region}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.status"></a>

```java
public java.util.List<java.lang.String> getStatus();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/elasticache_service_updates#status DataAwsElasticacheServiceUpdates#status}.

---

### DataAwsElasticacheServiceUpdatesServiceUpdates <a name="DataAwsElasticacheServiceUpdatesServiceUpdates" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdates.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_elasticache_service_updates.DataAwsElasticacheServiceUpdatesServiceUpdates;

DataAwsElasticacheServiceUpdatesServiceUpdates.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsElasticacheServiceUpdatesServiceUpdatesList <a name="DataAwsElasticacheServiceUpdatesServiceUpdatesList" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_elasticache_service_updates.DataAwsElasticacheServiceUpdatesServiceUpdatesList;

new DataAwsElasticacheServiceUpdatesServiceUpdatesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.get"></a>

```java
public DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference <a name="DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_elasticache_service_updates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference;

new DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.autoUpdateAfterRecommendedApplyByDate">autoUpdateAfterRecommendedApplyByDate</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.endDate">endDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.engine">engine</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.engineVersion">engineVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.estimatedUpdateTime">estimatedUpdateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.recommendedApplyByDate">recommendedApplyByDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.releaseDate">releaseDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdates">DataAwsElasticacheServiceUpdatesServiceUpdates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoUpdateAfterRecommendedApplyByDate`<sup>Required</sup> <a name="autoUpdateAfterRecommendedApplyByDate" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.autoUpdateAfterRecommendedApplyByDate"></a>

```java
public IResolvable getAutoUpdateAfterRecommendedApplyByDate();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.endDate"></a>

```java
public java.lang.String getEndDate();
```

- *Type:* java.lang.String

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.engine"></a>

```java
public java.lang.String getEngine();
```

- *Type:* java.lang.String

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.engineVersion"></a>

```java
public java.lang.String getEngineVersion();
```

- *Type:* java.lang.String

---

##### `estimatedUpdateTime`<sup>Required</sup> <a name="estimatedUpdateTime" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.estimatedUpdateTime"></a>

```java
public java.lang.String getEstimatedUpdateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recommendedApplyByDate`<sup>Required</sup> <a name="recommendedApplyByDate" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.recommendedApplyByDate"></a>

```java
public java.lang.String getRecommendedApplyByDate();
```

- *Type:* java.lang.String

---

##### `releaseDate`<sup>Required</sup> <a name="releaseDate" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.releaseDate"></a>

```java
public java.lang.String getReleaseDate();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.internalValue"></a>

```java
public DataAwsElasticacheServiceUpdatesServiceUpdates getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdates">DataAwsElasticacheServiceUpdatesServiceUpdates</a>

---



