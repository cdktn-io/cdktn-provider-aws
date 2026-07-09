# `dataAwsOpensearchserverlessCollectionGroups` Submodule <a name="`dataAwsOpensearchserverlessCollectionGroups` Submodule" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOpensearchserverlessCollectionGroups <a name="DataAwsOpensearchserverlessCollectionGroups" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/opensearchserverless_collection_groups aws_opensearchserverless_collection_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_opensearchserverless_collection_groups.DataAwsOpensearchserverlessCollectionGroups;

DataAwsOpensearchserverlessCollectionGroups.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/opensearchserverless_collection_groups#region DataAwsOpensearchserverlessCollectionGroups#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsOpensearchserverlessCollectionGroups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_opensearchserverless_collection_groups.DataAwsOpensearchserverlessCollectionGroups;

DataAwsOpensearchserverlessCollectionGroups.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_opensearchserverless_collection_groups.DataAwsOpensearchserverlessCollectionGroups;

DataAwsOpensearchserverlessCollectionGroups.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_opensearchserverless_collection_groups.DataAwsOpensearchserverlessCollectionGroups;

DataAwsOpensearchserverlessCollectionGroups.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_opensearchserverless_collection_groups.DataAwsOpensearchserverlessCollectionGroups;

DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsOpensearchserverlessCollectionGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsOpensearchserverlessCollectionGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsOpensearchserverlessCollectionGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/opensearchserverless_collection_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsOpensearchserverlessCollectionGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.collectionGroupSummaries">collectionGroupSummaries</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `collectionGroupSummaries`<sup>Required</sup> <a name="collectionGroupSummaries" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.collectionGroupSummaries"></a>

```java
public DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList getCollectionGroupSummaries();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroups.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_opensearchserverless_collection_groups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries;

DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries.builder()
    .build();
```


### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_opensearchserverless_collection_groups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits;

DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits.builder()
    .build();
```


### DataAwsOpensearchserverlessCollectionGroupsConfig <a name="DataAwsOpensearchserverlessCollectionGroupsConfig" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_opensearchserverless_collection_groups.DataAwsOpensearchserverlessCollectionGroupsConfig;

DataAwsOpensearchserverlessCollectionGroupsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/opensearchserverless_collection_groups#region DataAwsOpensearchserverlessCollectionGroups#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_opensearchserverless_collection_groups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList;

new DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.get"></a>

```java
public DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_opensearchserverless_collection_groups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference;

new DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu">maxIndexingCapacityInOcu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.maxSearchCapacityInOcu">maxSearchCapacityInOcu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.minIndexingCapacityInOcu">minIndexingCapacityInOcu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.minSearchCapacityInOcu">minSearchCapacityInOcu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxIndexingCapacityInOcu`<sup>Required</sup> <a name="maxIndexingCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu"></a>

```java
public java.lang.Number getMaxIndexingCapacityInOcu();
```

- *Type:* java.lang.Number

---

##### `maxSearchCapacityInOcu`<sup>Required</sup> <a name="maxSearchCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.maxSearchCapacityInOcu"></a>

```java
public java.lang.Number getMaxSearchCapacityInOcu();
```

- *Type:* java.lang.Number

---

##### `minIndexingCapacityInOcu`<sup>Required</sup> <a name="minIndexingCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.minIndexingCapacityInOcu"></a>

```java
public java.lang.Number getMinIndexingCapacityInOcu();
```

- *Type:* java.lang.Number

---

##### `minSearchCapacityInOcu`<sup>Required</sup> <a name="minSearchCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.minSearchCapacityInOcu"></a>

```java
public java.lang.Number getMinSearchCapacityInOcu();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimits</a>

---


### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_opensearchserverless_collection_groups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList;

new DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.get"></a>

```java
public DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference <a name="DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_opensearchserverless_collection_groups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference;

new DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.capacityLimits">capacityLimits</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.createdDate">createdDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.numberOfCollections">numberOfCollections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.standbyReplicas">standbyReplicas</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `capacityLimits`<sup>Required</sup> <a name="capacityLimits" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.capacityLimits"></a>

```java
public DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList getCapacityLimits();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesCapacityLimitsList</a>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.createdDate"></a>

```java
public java.lang.String getCreatedDate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `numberOfCollections`<sup>Required</sup> <a name="numberOfCollections" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.numberOfCollections"></a>

```java
public java.lang.Number getNumberOfCollections();
```

- *Type:* java.lang.Number

---

##### `standbyReplicas`<sup>Required</sup> <a name="standbyReplicas" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.standbyReplicas"></a>

```java
public java.lang.String getStandbyReplicas();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummariesOutputReference.property.internalValue"></a>

```java
public DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroups.DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries">DataAwsOpensearchserverlessCollectionGroupsCollectionGroupSummaries</a>

---



